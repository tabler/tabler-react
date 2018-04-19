import os
import os.path
import sys

libDir = '../src/'
exampleDir = '../example/src/'

# Functions Parsing/Handling File Names

def walkFileNames(booleanOperator, successCallback, failureCallback):
    walkLibFileNames(booleanOperator, successCallback, failureCallback)
    walkExampleFileNames(booleanOperator, successCallback, failureCallback)

def walkLibFileNames(booleanOperator, successCallback, failureCallback):
    _walk(libDir, False, booleanOperator, successCallback, failureCallback)

def walkExampleFileNames(booleanOperator, successCallback, failureCallback):
    _walk(exampleDir, False, booleanOperator, successCallback, failureCallback)

# Functions Parsing/Handling File Contents

def walkFileContents(booleanOperator, successCallback, failureCallback):
    walkLibFileContents(booleanOperator, successCallback, failureCallback)
    walkExampleFileContents(booleanOperator, successCallback, failureCallback)

def walkLibFileContents(booleanOperator, successCallback, failureCallback):
    _walk(libDir, True, booleanOperator, successCallback, failureCallback)

def walkExampleFileContents(booleanOperator, successCallback, failureCallback):
    _walk(exampleDir, True, booleanOperator, successCallback, failureCallback)

# Public Helper Functions

def dirCheck():
    if not os.getcwd().endswith('/scripts'):
        print('[Error] Please run this script from the scripts dir!')
        sys.exit(1)

def exitOk(msg):
    print(msg)
    sys.exit(0)

def exitFatal(msg):
    print(msg)
    sys.exit(1)

# Private Helper Functions

def _readFile(filePath):
    with open(filePath, 'r') as file:
        return file.read()

def _walk(path, isContents, booleanOperator, successCallback, failureCallback):
    for root, _, files in os.walk(path):
        path = os.path.relpath(root, os.getcwd())
        files = [f for f in files if f.endswith('.react.js')]
        for fileName in files:
            filePath = '{}{}{}'.format(path, os.sep, fileName)
            stringArg = _readFile(filePath) if isContents else fileName
            didSucceed = booleanOperator(filePath, stringArg)
            if didSucceed:
                if successCallback is not None:
                    successCallback(filePath)
            else:
                if failureCallback is not None:
                    failureCallback(filePath)
