#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [ ! -x "node_modules/.bin/vite" ]; then
  echo "Installing project dependencies..."
  npm install
fi

HOST="${HOST:-0.0.0.0}"
PORT="${PORT:-5173}"

echo "Starting PawWellBot dev server at http://localhost:${PORT}"
exec npx vite --host "$HOST" --port "$PORT"
