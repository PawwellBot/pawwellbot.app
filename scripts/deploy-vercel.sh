#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

TARGET="${1:-preview}"
if [ "$#" -gt 0 ]; then
  shift
fi

if ! command -v vercel >/dev/null 2>&1; then
  echo "Vercel CLI is not installed. Install it with: npm install -g vercel"
  exit 1
fi

if ! vercel whoami >/dev/null 2>&1; then
  echo "Vercel CLI is not logged in. Run: vercel login"
  exit 1
fi

npm run build

case "$TARGET" in
  prod|production)
    exec vercel deploy --prod "$@"
    ;;
  preview|"")
    exec vercel deploy "$@"
    ;;
  *)
    echo "Unknown deploy target: $TARGET"
    echo "Use one of: preview, production"
    exit 1
    ;;
esac
