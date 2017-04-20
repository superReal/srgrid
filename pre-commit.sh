#!/bin/bash
set -o errexit

num=`git status --porcelain | grep 'src\|test/' | wc -l`

if [ "$num" -gt "0" ]
then
    stylelint './src/styles/**/*.scss' './test/visual/styles/**/*.scss' && eslint './test/**/*.js'
fi
