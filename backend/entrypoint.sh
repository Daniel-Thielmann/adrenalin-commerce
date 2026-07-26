#!/bin/sh
set -e

echo "Waiting for database..."
MAX_RETRIES=30
COUNT=0
until node -e "
  const u = new URL(process.env.DATABASE_URL);
  const s = require('net').createConnection(u.port, u.hostname);
  s.setTimeout(5000, () => process.exit(1));
  s.on('connect', () => process.exit(0));
  s.on('error', () => process.exit(1));
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
npx prisma migrate deploy 2>&1

echo "Running seed..."
npx prisma db seed 2>&1 || echo "Seed already applied or not needed"

echo "Starting server..."
exec node dist/server.js
