#!/usr/bin/env python

import re
import repoutils

def propsValidator(filePath, contents):
    regex = re.compile('.*type Props\s?=\s?({.*?});.*', re.DOTALL)
    match = regex.match(contents)
    if match is None:
        return True

    props = match.group(1)
    if not (props.startswith('{|') and props.endswith('|}')):
        return False

    props = [x.strip() for x in props.replace('{|', '').replace('|}', '').split(',')]
    props = [x for x in props if x != '']

    for prop in props:
        if prop.startswith('//'):
            continue
        if not (prop.startswith('+') or prop.startswith('...')):
            return False

    return True

def failureCallback(filePath):
    invalidPropFiles.append(filePath)

repoutils.dirCheck()
invalidPropFiles = []
repoutils.walkFileContents(propsValidator, None, failureCallback)
if len(invalidPropFiles) > 0:
    errorMsg = 'The following files had invalid declarations of type Props:\n' + '\n'.join(invalidPropFiles)
    repoutils.exitFatal(errorMsg)
else:
    repoutils.exitOk('All files checked!')
