#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/