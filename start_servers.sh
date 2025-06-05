#!/bin/bash

echo "Starting Medusa dev servers from ~/Obexone with npm run dev:all..."

cd ~/Obexone || { echo "Directory ~/Obexone not found"; exit 1; }

npm run dev:all

echo "Servers started."
