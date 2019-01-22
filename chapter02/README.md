# Chapter 02. JavaScript Development Tools

- git: version control
- Node: a runtime allows you ro run JS outside the browser
- terminal: a.k.a. the command line or command prompt
- npm: package management by means of Node
  - 2 levels: global and local
  - global packages are usually command-line tools
  - local packages are project specific
  - package installation by `npm istall`
  - dependencies called module of the project are recorded in `package.json` in the project root
  - 2 kinds of dependencies: **regular** and **dev**, where dev isn't necessary for running the app
  - `npm install` with flag `--save`/`--saveDev` to add dep record to `package.json`
- babel: transcompilers to translate ES6 to ES5
- ESLint: a linter as static syntax checker

## evergreen

- browser manufacturers are moving away from the concept of having discrete browser versions that have to be updated. Browsers should be able to keep themselves up to date because they are always connected to the Internet
- Browsers still have versions, but it is now more reasonable to assume that your users have the latest version—because evergreen browsers don’t give users the option not to upgrade.

## ES6 Features

New York–based developer kangax maintains an excellent [compatibility table](https://kangax.github.io/compat-table/es6/) of ES6 (and ES7) features.
