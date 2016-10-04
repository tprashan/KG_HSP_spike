#!/bin/bash
set -e

echo " *** Running integrationTest *** "
mocha tests/integrationTest/*Test.js
