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
    return len(docstring) > 0

def failureCallback(filePath):
    invalidDocFiles.append(filePath)

invalidDocFiles = []
repoutils.walkLibFileContents(docChecker, None, failureCallback)
if len(invalidDocFiles) > 0:
    print('The following files were missing Docstrings:\n')
    print('\n'.join(invalidDocFiles))
    sys.exit(1)
else:
    print('All files checked!')
