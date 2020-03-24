#!/bin/bash

npm run build
cp CNAME docs/
git add .
git commit -am 'deploy'
