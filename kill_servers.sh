#!/bin/bash

for port in 8000 9000; do
  echo "Checking for processes on port $port..."
  pids=$(sudo lsof -t -i tcp:$port)
  if [ -z "$pids" ]; then
    echo "No process found on port $port."
  else
    echo "Killing processes on port $port: $pids"
    sudo kill -9 $pids
  fi
done

echo "Done."
