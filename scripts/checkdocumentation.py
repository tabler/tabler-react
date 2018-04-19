#!/usr/bin/env python

import os
import re
import sys

import repoutils

if not os.getcwd().endswith('/scripts'):
    print('[Error] Please run this script from the scripts dir!')
    sys.exit(1)

def docChecker(filePath, contents):
    regex = re.compile('.*/*\s?\[DOC\]\s*\n(.*?)\*/.*', re.DOTALL)
    match = regex.match(contents)
    if match is None:
        return False

    docstring = match.group(1).replace('*', '', 1).strip()
    print(docstring)

    return True

def failureCallback(filePath):
    pass

repoutils.walkFileContents(docChecker, None, failureCallback)
