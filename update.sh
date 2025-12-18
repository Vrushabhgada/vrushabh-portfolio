#!/bin/bash


git add .
git commit -m "Auto update $(date +"%Y-%m-%d %T")"
git push origin main

echo "Update complete."

npm run deploy