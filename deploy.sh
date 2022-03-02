#!/usr/bin/env sh

set -e
npm run build
cd dist

git init
git add -A
git commit -m "deployment script executed"
git push -f git@github.com:ssaleen/ssaleen.github.io.git master:deploy

cd -