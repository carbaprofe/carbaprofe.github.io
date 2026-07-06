#!/bin/bash
# Publica automáticamente los cambios de la carpeta en GitHub.
# GitHub Actions se encarga después de compilar y desplegar la web.

REPO="/Users/carba/Documents/carbaprofe.github.io"
cd "$REPO" || exit 1

git add -A

if ! git diff --cached --quiet; then
  git commit -m "auto: cambios $(date '+%Y-%m-%d %H:%M')"
  git push origin main
fi
