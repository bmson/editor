// Dependencies
var reqly = require('reqly-react');
var pkg   = require('./package.json');

//
var config = pkg.config;

//
reqly.server(config.port, {
  privatePath: config.privatePath,
  privateFile: config.privateFile,

  publicPath:  config.publicPath,
  publicFile:  config.publicFile
});
