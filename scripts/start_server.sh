#!/bin/bash
set -e
echo "[ApplicationStart] starting calculator-api"

systemctl enable calculator-api
systemctl start calculator-api
sleep 3
systemctl is-active calculator-api

echo "[ApplicationStart] done"