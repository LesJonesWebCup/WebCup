#!/bin/bash

npm run build
cp -r build/* ~/public_html
