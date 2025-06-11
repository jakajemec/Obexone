#!/bin/bash

for port in 8000 9000; do
  PIDS=$(sudo ss -tulpn | grep ":$port" | awk -F 'pid=' '{print $2}' | awk '{print $1}' | uniq)
  if [ -z "$PIDS" ]; then
    echo "No processes found on port $port."
  else
    echo "Killing processes on port $port: $PIDS"
    sudo kill -9 $PIDS
  fi
done

echo "Done."
