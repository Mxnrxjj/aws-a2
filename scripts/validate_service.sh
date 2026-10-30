#!/bin/bash
set -e
echo "[ValidateService] checking /health"

for i in $(seq 1 10); do
  if curl -fs http://localhost:3000/health > /dev/null; then
    echo "[ValidateService] health check passed on attempt $i"
    exit 0
  fi
  echo "attempt $i failed, retrying"
  sleep 3
done

echo "[ValidateService] health check failed after 10 attempts"
exit 1