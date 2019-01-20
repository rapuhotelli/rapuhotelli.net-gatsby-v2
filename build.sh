#!/usr/bin/env bash
rm -rf .cache/
rm -rf public/
gatsby build
cd public && python -m SimpleHTTPServer 8000