#!/bin/sh
set -eu

echo "Validating environment variables..."

if [ -z "${DATABASE_URL:-}" ]; then
  echo "ERROR: DATABASE_URL is not configured."
  exit 1
fi

echo "Waiting for database..."

MAX_RETRIES="${DB_MAX_RETRIES:-30}"
RETRY_DELAY="${DB_RETRY_DELAY:-2}"
COUNT=0

until node <<'NODE'
const net = require("net");

const databaseUrl = process.env.DATABASE_URL;

try {
  const url = new URL(databaseUrl);
  const port = Number(url.port || 5432);

  const socket = net.createConnection({
    host: url.hostname,
    port,
  });

  socket.setTimeout(5000);

  socket.once("connect", () => {
    socket.destroy();
    process.exit(0);
  });

  socket.once("timeout", () => {
    console.error("Database connection timed out.");
    socket.destroy();
    process.exit(1);
  });

  socket.once("error", (error) => {
    console.error(`Database connection failed: ${error.message}`);
    process.exit(1);
  });
} catch (error) {
  console.error(`Invalid DATABASE_URL: ${error.message}`);
  process.exit(1);
}
NODE
do
  COUNT=$((COUNT + 1))

  if [ "$COUNT" -ge "$MAX_RETRIES" ]; then
    echo "ERROR: Database unavailable after $MAX_RETRIES attempts."
    exit 1
  fi

  echo "Database unavailable ($COUNT/$MAX_RETRIES). Retrying in ${RETRY_DELAY}s..."
  sleep "$RETRY_DELAY"
done

echo "Database ready."

export DIRECT_URL="${DIRECT_URL:-$DATABASE_URL}"

echo "Applying Prisma migrations..."
set +e
MIGRATE_OUTPUT=$(npx prisma migrate deploy 2>&1)
MIGRATE_EXIT=$?
set -e

if [ $MIGRATE_EXIT -ne 0 ]; then
  if echo "$MIGRATE_OUTPUT" | grep -q "P3005"; then
    echo "Database has existing tables without migration history."
    echo "Syncing database schema..."
    npx prisma db push --skip-generate --accept-data-loss 2>&1
    echo "Baselining all migrations..."
    for dir in prisma/migrations/*/; do
      name=$(basename "$dir")
      [ "$name" = "*" ] && continue
      npx prisma migrate resolve --applied "$name" 2>&1
    done
    echo "Verifying migrations..."
    npx prisma migrate deploy 2>&1
  else
    echo "$MIGRATE_OUTPUT"
    exit $MIGRATE_EXIT
  fi
fi

if [ "${RUN_DATABASE_SEED:-false}" = "true" ]; then
  echo "Running database seed..."
  npx prisma db seed
else
  echo "Skipping database seed."
fi

echo "Locating compiled server..."

if [ -f "dist/server.js" ]; then
  SERVER_FILE="dist/server.js"
elif [ -f "dist/src/server.js" ]; then
  SERVER_FILE="dist/src/server.js"
else
  echo "ERROR: Compiled server was not found."
  echo "Expected dist/server.js or dist/src/server.js."
  echo "Check the TypeScript build configuration."
  exit 1
fi

echo "Starting server from $SERVER_FILE..."
exec node "$SERVER_FILE"