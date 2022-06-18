#!/bin/sh

CSS_DIR=../css
SASS_DIR=.
mkdir -p "$CSS_DIR"
echo "sass ${SASS_DIR}/*.sass ${CSS_DIR}/index.css"
sass ${SASS_DIR}/*.sass ${CSS_DIR}/index.css