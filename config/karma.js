var nodeConfig = require('./node');

var karmaConfig = {
  logLevel: nodeConfig.logLevel,
  plugins: [
    'karma-chrome-launcher',
    'karma-jasmine',
    'karma-phantomjs-launcher',
    'karma-sourcemap-loader',
    'karma-webpack',
  ],
  browsers: nodeConfig.debug ? [ 'Chrome' ] : [ 'PhantomJS' ],
  singleRun: !nodeConfig.debug,
  frameworks: [ 'jasmine' ],
  files: [ '../test/index.js' ],
  preprocessors: {
    '../src/**/*.js': [ 'webpack', 'sourcemap' ],
    '../test/index.js': [ 'webpack', 'sourcemap' ],
  },
  webpack: require('./webpack.js'),
  webpackMiddleware: { noInfo: nodeConfig.logLevel !== 'DEBUG' },
  reporters: [],
};

if (nodeConfig.ci) {
  addProgressReporter();
} else {
  addNyanReporter();
}

if (!nodeConfig.fast) {
  addCoverageReporter();
  addHtmlReporter();
  addJsonReporter();
  addJsonResultReporter();
}

function addProgressReporter() {
  karmaConfig.reporters.push('progress');
}

function addNyanReporter() {
  karmaConfig.plugins.push('karma-nyan-reporter');
  karmaConfig.reporters.push('nyan');
}

function addCoverageReporter() {
  karmaConfig.plugins.push('karma-coverage');
  karmaConfig.reporters.push('coverage');

  karmaConfig.coverageReporter = {
    dir: '../reports/unit-test-coverage',
    reporters: [
      // Output to console
      { type: 'text-summary' },
      // Output to files
      { type: 'html', subdir: 'html' },
      { type: 'text', subdir: 'txt', file: 'detail.txt' },
      { type: 'text-summary', subdir: 'txt', file: 'summary.txt' },
    ],
  };

  karmaConfig.webpack.module.postLoaders = [
    {
      test: /\.js$/,
      include: /src/,
      exclude: /\.spec.js$/,
      loader: 'isparta',
    }
  ];

}

function addHtmlReporter() {
  karmaConfig.plugins.push('karma-html-reporter');
  karmaConfig.reporters.push('html');
  karmaConfig.htmlReporter = {
    outputDir: '../reports/unit-test/html/',
    namedFiles: true,
    reportName: 'index'
  };
}

function addJsonReporter() {
  karmaConfig.plugins.push('karma-json-reporter');
  karmaConfig.reporters.push('json');
  karmaConfig.jsonReporter = {
    stdout: false,
    outputFile: '../reports/unit-test/json/summary.json'
  };
}

function addJsonResultReporter() {
  karmaConfig.plugins.push('karma-json-result-reporter');
  karmaConfig.reporters.push('json-result');
  karmaConfig.jsonResultReporter = {
    outputFile: '../reports/unit-test/json/detail.json'
  };
}

module.exports = function(karma) {
  karma.set(karmaConfig);
};
