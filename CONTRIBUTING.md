# Contributing

Thanks for getting involved, we really appreciate the help!

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

## Submitting Changes

Please send a [GitHub Pull Request to tabler-react](https://github.com/tabler/tabler-react/pull/new/master) with
a list of what you've done and a screenshot if making visible changes to components.
