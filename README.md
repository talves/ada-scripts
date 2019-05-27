<div align="center">
<h1>ada-scripts 🛠📦</h1>

<p>CLI toolbox for common scripts for my projects</p>
</div>

<hr />

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmcharts]
[![MIT License][license-badge]][license]

[![All Contributors](https://img.shields.io/badge/all_contributors-12-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## The problem

Kent C. Dodds did a bunch of open source and wanted to make it easier to maintain so many
projects. I will follow his pattern, because it's Kent and he has done the hard part for us!
A lot of the wording here was from the original fork. See [kcd-scripts][kcd] for original.

## This solution

This is a CLI that abstracts away all configuration for my open source projects
for linting, testing, building, and more.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
  - [Overriding Config](#overriding-config)
  - [Flow support](#flow-support)
- [Inspiration](#inspiration)
- [Other Solutions](#other-solutions)
- [Contributors](#contributors)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```bash
npm install --save-dev ada-scripts
```

or

```bash
yarn add ada-scripts --dev
```

## Usage

This is a CLI and exposes a bin called `ada-scripts`. I don't really plan on
documenting or testing it super duper well because it's really specific to my
needs. You'll find all available scripts in `src/scripts`.

This project actually dogfoods itself. If you look in the `package.json`, you'll
find scripts with `node src {scriptName}`. This serves as an example of some
of the things you can do with `ada-scripts`.

### Overriding Config

Unlike `react-scripts`, `ada-scripts` allows you to specify your own
configuration for things and have that plug directly into the way things work
with `ada-scripts`. There are various ways that it works, but basically if you
want to have your own config for something, just add the configuration and
`ada-scripts` will use that instead of it's own internal config. In addition,
`ada-scripts` exposes its configuration so you can use it and override only
the parts of the config you need to.

This can be a very helpful way to make editor integration work for tools like
ESLint which require project-based ESLint configuration to be present to work.

So, if we were to do this for ESLint, you could create an `.eslintrc` with the
contents of:

```
{"extends": "./node_modules/ada-scripts/eslint.js"}
```

> Note: for now, you'll have to include an `.eslintignore` in your project until
> [this eslint issue is resolved](https://github.com/eslint/eslint/issues/9227).

Or, for `babel`, a `.babelrc` with:

```
{"presets": ["ada-scripts/babel"]}
```

Or, for `jest`:

```javascript
const {jest: jestConfig} = require('ada-scripts/config')
module.exports = Object.assign(jestConfig, {
  // your overrides here

  // for test written in Typescript, add:
  transform: {
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
})
```

> Note: `ada-scripts` intentionally does not merge things for you when you start
> configuring things to make it less magical and more straightforward. Extending
> can take place on your terms. I think this is actually a great way to do this.

### Flow support

If the `flow-bin` is a dependency on the project the `@babel/preset-flow` will automatically get loaded when you use the default babel config that comes with `ada-scripts`. If you customised your `.babelrc`-file you might need to manually add `@babel/preset-flow` to the `presets`-section.

## Inspiration

This is heavily inspired by `kcd-scripts` which was inspired by `react-scripts`.

## Other Solutions

If you want to make your own, I recommend you fork [kcd-scripts][kcd]! This is a specific to me solution.

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://3alves.com"><img src="https://avatars3.githubusercontent.com/u/784848?s=460&v=4" width="100px;" alt="Tony Alves"/><br /><sub><b>Tony Alves</b></sub></a><br /><a href="https://github.com/talves/ada-scripts/commits?author=talves" title="Code">💻</a></td><td align="center"><a href="https://kentcdodds.com"><img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;" alt="Kent C. Dodds"/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="https://github.com/talves/ada-scripts/commits?author=kentcdodds" title="Code">💻</a> <a href="https://github.com/talves/ada-scripts/commits?author=kentcdodds" title="Documentation">📖</a> <a href="#infra-kentcdodds" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/talves/ada-scripts/commits?author=kentcdodds" title="Tests">⚠️</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

[kcd]: https://github.com/kentcdodds/kcd-scripts
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/talves/ada-scripts.svg?style=flat-square
[build]: https://travis-ci.org/talves/ada-scripts
[coverage-badge]: https://img.shields.io/codecov/c/github/talves/ada-scripts.svg?style=flat-square
[coverage]: https://codecov.io/github/talves/ada-scripts
[version-badge]: https://img.shields.io/npm/v/ada-scripts.svg?style=flat-square
[package]: https://www.npmjs.com/package/ada-scripts
[downloads-badge]: https://img.shields.io/npm/dm/ada-scripts.svg?style=flat-square
[npmcharts]: http://npmcharts.com/compare/ada-scripts
[license-badge]: https://img.shields.io/npm/l/ada-scripts.svg?style=flat-square
[license]: https://github.com/talves/ada-scripts/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/talves/ada-scripts/blob/master/other/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/talves/ada-scripts.svg?style=social
[github-watch]: https://github.com/talves/ada-scripts/watchers
[github-star-badge]: https://img.shields.io/github/stars/talves/ada-scripts.svg?style=social
[github-star]: https://github.com/talves/ada-scripts/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20ada-scripts!%20https://github.com/talves/ada-scripts%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/talves/ada-scripts.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
