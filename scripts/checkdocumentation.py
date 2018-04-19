#!/usr/bin/env python

import os
import re
import sys

import repoutils

if not os.getcwd().endswith('/scripts'):
    print('[Error] Please run this script from the scripts dir!')
    sys.exit(1)

def docChecker(filePath, contents):
    return True

def failureCallback(filePath):
    pass

repoutils.walkFileContents(docChecker, None, failureCallback)
