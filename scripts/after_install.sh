#!/bin/bash
set -e
echo "[AfterInstall] installing production dependencies"

cd /opt/calculator-api
npm install --omit=dev --no-audit --no-fund

echo "[AfterInstall] installing systemd unit"
cp /opt/calculator-api/scripts/calculator-api.service /etc/systemd/system/calculator-api.service
systemctl daemon-reload

chown -R ec2-user:ec2-user /opt/calculator-api
echo "[AfterInstall] done"