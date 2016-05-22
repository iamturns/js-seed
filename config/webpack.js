var nodeConfig = require('node-config');
var path = require('path');
var webpack = require('webpack');

var webpackConfig = {
  // Intentionally an array: https://github.com/webpack/webpack/issues/300
  entry: [ './src/index.js' ],
  output: {
    path: './',
    filename: 'index.js',
    library: nodeConfig.name,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  // Used by both babel-loader and isparta
  babel: {
    presets: ['es2015'],
    compact: true,
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
  plugins: [
    new webpack.BannerPlugin('Test banner'),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(nodeConfig.version),
    })
  ],
};

if (nodeConfig.webpack.uglify && false) {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = webpackConfig;
