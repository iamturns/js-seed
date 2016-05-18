var nodeConfig = require('./node.js');

var webpackConfig = {
  // Intentionally an array: https://github.com/webpack/webpack/issues/300
  entry: [ './src/index.js' ],
  output: {
    path: './',
    filename: 'index.js',
    library: nodeConfig.name,
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  // Used by both babel-loader and isparta
  babel: {
    presets: ['es2015']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  debug: nodeConfig.debug,
  devtool: nodeConfig.webpack.devtool,
};

module.exports = webpackConfig;
