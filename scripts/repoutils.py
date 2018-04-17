import os
import os.path

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

# Helper Functions

def _readFile(filePath):
    with open(filePath, 'r') as file:
        return file.read()

def _walk(path, isContents, booleanOperator, successCallback, failureCallback):
    for root, _, files in os.walk(path):
        path = os.path.relpath(root, os.getcwd())
        files = [f for f in files if f.endswith('.js')]
        for fileName in files:
            filePath = '{}{}{}'.format(path, os.sep, fileName)
            stringArg = _readFile(filePath) if isContents else fileName
            didSucceed = booleanOperator(filePath, stringArg)
            if didSucceed and successCallback is not None:
                successCallback(filePath)
            elif failureCallback is not None:
                failureCallback(filePath)
