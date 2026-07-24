#!/bin/sh
set -e

echo "Waiting for database..."
until npx prisma db push --skip-generate 2>/dev/null; do
  sleep 2
done
echo "Database ready!"

echo "Running seed..."
npx prisma db seed 2>/dev/null || echo "Seed already applied or not needed"

echo "Starting server..."
exec node dist/server.js