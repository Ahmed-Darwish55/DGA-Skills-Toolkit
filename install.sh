#!/usr/bin/env sh
# DGA Skills Toolkit (dga-skills) installer wrapper (macOS / Linux). Usage: ./install.sh [install|verify|self-check|list-backups|rollback|uninstall] [options]
set -e
DIR="$(cd "$(dirname "$0")" && pwd)"
PY="$(command -v python3 || command -v python || true)"
[ -n "$PY" ] || { echo "Python 3.8+ is required (python3 not found)."; exit 2; }
[ $# -eq 0 ] && set -- install
exec "$PY" "$DIR/install.py" "$@"
