// Dependencies
var path = require('path');
var webpack = require('webpack');
var pkg = require('./../package.json');

// Create hot module
var hotModule = new webpack.HotModuleReplacementPlugin()

// Module definition
module.exports = {

  entry: [
    'webpack-dev-server/client?http://localhost:' + pkg.config.proxy,
    'webpack/hot/only-dev-server',
    './' + pkg.config.privatePath + pkg.config.main
  ],

  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: pkg.config.publicPath
  },

  plugins: [hotModule],
  devtool: 'eval',

  module: {

    loaders: [{
      test: /\.jsx$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, '../' + pkg.config.privatePath)
    }]

  }
};
