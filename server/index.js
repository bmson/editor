// Dependencies
var Webpack = require('webpack');
var Server = require('webpack-dev-server');
var config  = require('./config');
var pkg = require('./../package.json');

// Setup webpack
var webpack = Webpack(config);

// Create server
var server = new Server(webpack, {

  publicPath: config.output.publicPath,
  hot: true,
  contentBase: 'server'

}).listen(pkg.config.proxy, 'localhost', function (error, result) {

  // Return error
  if (error)
    return console.error(err);

  // Show success
  console.log('Listening at http://localhost:3000');

});
