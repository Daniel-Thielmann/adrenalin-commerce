#!/bin/sh
set -e

echo "Waiting for database..."
MAX_RETRIES=30
COUNT=0
until node -e "
  const url = process.env.DATABASE_URL;
  if (!url) { console.error('DATABASE_URL not set'); process.exit(1); }
  const u = new URL(url);
  const port = parseInt(u.port || '5432');
  const s = require('net').createConnection(port, u.hostname);
  s.setTimeout(5000, () => process.exit(1));
  s.on('connect', () => process.exit(0));
  s.on('error', (e) => { console.error(e.message); process.exit(1); });
" 2>&1; do
  COUNT=$((COUNT + 1))
  if [ $COUNT -ge $MAX_RETRIES ]; then
    echo "ERROR: Database not ready after $MAX_RETRIES attempts, exiting."
    exit 1
  fi
  echo "Database not ready yet (attempt $COUNT/$MAX_RETRIES), retrying in 2s..."
  sleep 2
done
echo "Database ready!"

echo "Running migrations..."
set +e
MIGRATE_OUTPUT=$(npx prisma migrate deploy 2>&1)
MIGRATE_EXIT=$?
set -e

if [ $MIGRATE_EXIT -eq 0 ]; then
  echo "$MIGRATE_OUTPUT"
elif echo "$MIGRATE_OUTPUT" | grep -q "P3005"; then
  echo "Database has existing tables without migration history. Baselining..."
  for dir in prisma/migrations/*/; do
    name=$(basename "$dir")
    [ "$name" = "*" ] && continue
    echo "  Resolving: $name"
    npx prisma migrate resolve --applied "$name" 2>&1
  done
  echo "Retrying migrate deploy..."
  npx prisma migrate deploy 2>&1
else
  echo "$MIGRATE_OUTPUT"
  exit $MIGRATE_EXIT
fi

echo "Running seed..."
npx prisma db seed 2>&1 || echo "Seed already applied or not needed"

echo "Starting server..."
exec node dist/server.js
