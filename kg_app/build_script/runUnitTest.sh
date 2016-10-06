#!/bin/bash
set -e

echo " *** Installing dependencies *** "
npm install

echo " *** Running UnitTest *** "
mocha tests/unitTest/*Test.js
