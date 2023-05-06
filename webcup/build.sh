#!/bin/bash

LOGO="ETIB"

react-scripts build && figlet $LOGO && cp -r build/* ~/public_html
