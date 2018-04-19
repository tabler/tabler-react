#!/usr/bin/env python

import re
import repoutils

def docChecker(filePath, contents):
    regex = re.compile('.*/*\s?\[DOC\]\s*\n(.*?)\*/.*', re.DOTALL)
    match = regex.match(contents)
    if match is None:
        return False

    docstring = match.group(1).replace('*', '', 1).strip()
    return len(docstring) > 0

def failureCallback(filePath):
    invalidDocFiles.append(filePath)

repoutils.dirCheck()
invalidDocFiles = []
repoutils.walkLibFileContents(docChecker, None, failureCallback)
if len(invalidDocFiles) > 0:
    errorMsg = 'The following files were missing Docstrings:\n' + '\n'.join(invalidDocFiles)
    repoutils.exitFatal(errorMsg)
else:
    repoutils.exitOk('All files checked!')
