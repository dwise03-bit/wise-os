#!/bin/bash

echo "===== Wise OS Doctor ====="

echo
echo "Git:"
git --version

echo
echo "Node:"
node -v

echo
echo "NPM:"
npm -v

echo
echo "Docker:"
docker --version 2>/dev/null || echo "Not Installed"

echo
echo "Bluetooth:"
bluetoothctl --version

echo
echo "API:"
curl -s http://localhost:3000/health || echo "Offline"
