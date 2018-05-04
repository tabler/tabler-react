#!/usr/bin/env python

import os
import re
import sys

import repoutils

if not sys.platform.startswith('win32'):
    if not os.getcwd().endswith('/scripts'):
        print('[Error] Please run this script from the scripts dir!')
        sys.exit(1)
else:
    if not os.getcwd().endswith('\scripts'):
        print('[Error] Please run this script from the scripts dir!')
        sys.exit(1)


def propsValidator(filePath, contents):
    regex = re.compile('.*type Props\s?=\s?({.*?});.*', re.DOTALL)
    match = regex.match(contents)
    if match is None:
        return True

    props = match.group(1)
    if not (props.startswith('{|') and props.endswith('|}')):
        return False

    props = [x.strip() for x in props.replace(
        '{|', '').replace('|}', '').split(',')]
    props = [x for x in props if x != '']

    for prop in props:
        if not prop.startswith('+'):
            if "<" in prop or ">" in prop or "//" or "..." in prop:
                return True
            else:
                return False

    return True


def successCallback(filePath):
    pass


def failureCallback(filePath):
    invalidPropFiles.append(filePath)


invalidPropFiles = []
repoutils.walkFileContents(propsValidator, successCallback, failureCallback)
if len(invalidPropFiles) > 0:
    print('The following files had invalid declarations of type Props:\n')
    print('\n'.join(invalidPropFiles))
else:
    print('All files checked!')
