#!/bin/bash
echo "[ApplicationStop] stopping calculator-api"

if systemctl list-unit-files | grep -q calculator-api.service; then
  systemctl stop calculator-api || true
fi

exit 0