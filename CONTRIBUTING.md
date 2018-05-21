# Contributing

Thanks for getting involved, we really appreciate the help!

## Commit Guidelines

Please structure your commit messages going by the [AngularJS commit message convention](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines), also known as [conventional-changelog](https://github.com/ajoslin/conventional-changelog).

We're using [commitlint](https://github.com/marionebl/commitlint) to help enforce these guidelines, you can install [commitizen](https://github.com/commitizen/cz-cli) to help, just follow their default setup instructions.

Examples:

| Commit Message                                                                                                             | Version Change |
| -------------------------------------------------------------------------------------------------------------------------- | -------------- |
| feat(Card): A new feature                                                                                                  | **Minor**      |
| fix(Button): A bug fix                                                                                                     | **Patch**      |
| docs(Header): Documentation only changes                                                                                   | None           |
| style(Nav): Changes that do not affect the meaning of the code (white-space, for matting, missing semi-colons, etc)        | None           |
| refactor(Form): A code change that neither fixes a bug nor adds a feature                                                  | None           |
| perf(Alert): A code change that improves performance                                                                       | None           |
| test(Dropdown): Adding missing tests or correcting existing tests                                                          | None           |
| build(webpack): Changes that affect the build system or external dependencies (example scopes: webpack, greenkeeper,, npm) | None           |
| ci(buddy): Changes to our CI configuration files and scripts (example scopes: buddy, semantic-release)                     | None           |
| chore(package): Other changes that don't modify src or test files                                                          | None           |
| revert(#123): Reverts a previous commit                                                                                    | None           |

##### Breaking changes / Major Version

If your change breaks anything a new major version should be released.
To do this your commit body needs to include 'BREAKING CHANGE:'. If you are using commitizen you will be asked about breaking changes during your commit.

Breaking changes commit example:

```
feat(Dropdown) rename an important prop

BREAKING CHANGE: Renames a prop that's really important
```

## Submitting Changes

Please send a [GitHub Pull Request to tabler-react](https://github.com/tabler/tabler-react/pull/new/master) with
a list of what you've done and a screenshot if making visible changes to components and make sure you have followed the commit guideline below.

## Versioning and Releases

We try to follow semantic versioning principles. To help us do so we're using semantic-release during our CI build process on the master branch. Commit messages will be scanned and if necessary the package version will be automatically updated, tagged, released and published to npm.

The table in the 'Commit Guidelines' section details what version change, if any, your commits will result in.

## Repository Structure

This repository contains 4 folders:

* /src contains all the Tabler React components
* /example is our [create-react-app](https://github.com/facebook/create-react-app/) based demo website
* /scripts contains some python scripts used during precommit
* /flow-typed external flow types

## Setup and Run

To setup and run a local copy:

1.  Clone this repo with `git clone https://github.com/tabler/tabler-react`
2.  Run `yarn` or `npm install` in the root folder
3.  Run `yarn` or `npm install` in the example folder
4.  In seperate terminal windows, run `yarn start` in the root and example folders.

You should now be up and running with live browser reloading of the example website while you work on Tabler React components in the /src folder.

During precommit all .js files are run through prettier and eslint so you might find it helpful to have these running in your editor or command line.
