#!/bin/bash

react-scripts --openssl-legacy-provider build && cat logo && cp -r build/* ~/public_html
