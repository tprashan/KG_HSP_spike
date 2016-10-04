#!/bin/bash
set -e

echo " *** Running UnitTest *** "
mocha tests/unitTest/*Test.js

echo " *** Running integrationTest *** "
mocha tests/integrationTest/*Test.js
