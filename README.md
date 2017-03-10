JS Seed
=======

- [Babel](https://babeljs.io/) - ES6
- [webpack](https://webpack.github.io/) - Bundling
- [karma](https://karma-runner.github.io/) - Running tests
- [jasmine](http://jasmine.github.io/) - Writing tests
- [isparta](https://github.com/douglasduteil/isparta) & [istanbul](https://github.com/gotwarlost/istanbul) - Test coverage
- [node-config](https://github.com/lorenwest/node-config) - Configuration
- [husky](https://github.com/typicode/husky) - Git hooks



Commands
========

- `npm run build`
    - Build `/src/index.js` to `/index.js` using webpack.
- `npm run clean`
    - Clean files generated by scripts.
- `npm run develop`
    - Build `/src/index.js` (with sourcemaps).
    - Automatically re-build when source files change.
- `npm run reset-deps`
    - Reset dependencies.
- `npm run test`
    - Run unit tests and end to end tests.
    - Reports generated in `/reports/`.
- `npm run test:e2e`
    - Placeholder command for end to end tests.
- `npm run test:unit`
    - Launch karma and run jasmine `*.spec.js` files.
- `npm run test:unit:watch`
    - Automatically re-run unit tests when source files change.
- `npm run test:unit:fast`
    - Run unit tests without code coverage or reports.
- `npm run test:unit:fast:watch`
    - Automatically re-run fast unit tests when source files change.



Environment variables
=====================

NODE_ENV
--------

- `development`
- `production`
- `test`

The appropriate configuration file is loaded from `/config/node/`.


DEBUG
-----

Set to `1` to;

- Increase console logging.
- Launch tests in a browser.


CI
--

Set to `1` to optimize commands for continuous integration servers, including reducing command line visuals.



Usage
=====

Clone this repository, and update the following;

- `./package.json`
    - `name`
    - `description`
    - `author`
- `./README.md`
    - Module name and description
    - Remove most sections
- `./CHANGELOG.md`
    - Remove releases
- `./src/index.js`
    - Banner (name, description, example usage)



Reports
=======

- `reports/unit-test/html/index.html`
- `reports/unit-test/json/summary.json`
- `reports/unit-test/json/detail.json`
- `reports/unit-test-coverage/html/index.html`
- `reports/unit-test-coverage/txt/summary.txt`
- `reports/unit-test-coverage/txt/detail.txt`



More documentation
==================

- [Change log](CHANGELOG.md)

Admin
-----

- [Release](docs/admin/release.md)



Roadmap
=======

- Implement ESLint with eslint-config-airbnb
- Banner at the top of the built javascript file
- Webpack dev server or BrowserSync integration
- E2E tests
- Docker



Author
======

[Matthew Turnbull](http://turnbullm.com) <[turnbullm@gmail.com](mailto:turnbullm@gmail.com)>



License
=======

Open sourced under the [MIT license](http://turnbullm.mit-license.org/).
