#!/usr/bin/env python

import os
import sys

import repoutils

if not os.getcwd().endswith('/scripts'):
    print('[Error] Please run this script from the scripts dir!')
    sys.exit(1)

def fileNameOperator(filePath, fileName):
    if not fileName.endswith('.react.js'):
        return True

    moduleName = fileName.replace('.react.js', '')
    modulePath = filePath.replace('.js', '').replace('../src', '.')
    statement = 'import {} from "{}";'.format(moduleName, modulePath)
    imports.append(statement)
    return True

imports = []
repoutils.walkLibFileNames(fileNameOperator, None, None)
print('// @flow\n\n{}'.format('\n'.join(imports)))
