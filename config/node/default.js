var changeCase = require('change-case');
var package = require('../../package.json');

module.exports = {
  name: changeCase.pascalCase(package.name),
  version: package.version,
  debug: (process.env.DEBUG === '1'),
  ci: (process.env.CI === '1'),
  fast: (process.env.FAST === '1'),
  // logLevel: 'DISABLE', 'ERROR', 'WARN', 'INFO', 'DEBUG'
  logLevel: (process.env.DEBUG === '1') ? 'DEBUG' : 'INFO',
  webpack: {
    devtool: 'source-map',
    uglify: false,
  },
};
