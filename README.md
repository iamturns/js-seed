ES2015 Webpack Karma Jasmine Boilerplate
========================================

Boilerplate for creating npm compatible javascript libraries in ES2015 with tests.

Features
--------

- Source files written in [ES2015](http://www.ecma-international.org/ecma-262/6.0/) and transpiled with [Babel](https://babeljs.io/).
- Build file bundled with [webpack](https://webpack.github.io/).
- Exported in UMD format for use in all environments (including AMD / [RequireJS](http://requirejs.org/) and CommonJS / [NodeJS](https://nodejs.org/) / [npm](https://www.npmjs.com/)).
- Unit tests written with [jasmine](http://jasmine.github.io/) and run with [karma](https://karma-runner.github.io/).
- Unit test coverage with [isparta](https://github.com/douglasduteil/isparta) & [istanbul](https://github.com/gotwarlost/istanbul).
- Configuration managed by [node-config](https://github.com/lorenwest/node-config) and environment variables (development, production, test).
- Reports generated for unit test and coverage in HTML, txt, and json files.
- [Environment variables](./docs/development/environment-variables.md) to enable debugging and continuous integration support.
- Git hooks with [husky](https://github.com/typicode/husky) ensure tests and builds pass.
- Change log adhering to [Semantic Versioning](http://semver.org/) and [Keep a CHANGELOG](http://keepachangelog.com/).   
- [NPM scripts](./docs/development/commands.md) to to build, develop, test, and clean.

@TODO uglify / minify

Usage
-----

Clone this repository, and update the following with your project information;

- `./package.json`
    - `name`
    - `description`
- `./src/index.js`
    - Banner (name, description, example usage)
- `./README.md`
    - Module name and description
    - Remove most sections
- `./CHANGELOG.md`
    - Remove releases


More documentation
------------------

- [Change log](CHANGELOG.md)

### Development

- [Commands](docs/development/commands.md)
- [Environment variables](docs/development/environment-variables.md)

### Admin

- [Release](docs/admin/release.md)

Roadmap
-------

- Implement ESLint with eslint-config-airbnb
- Banner at the top of the built javascript file
- Webpack dev server or BrowserSync integration
- E2E tests
- Docker

Author
------

[Matthew Turnbull](http://turnbullm.com) <[turnbullm@gmail.com](mailto:turnbullm@gmail.com)>

License
-------

Open sourced under the [MIT license](http://turnbullm.mit-license.org/).
