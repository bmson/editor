// Dependencies
var path  = require('path');
var reqly = require('reqly-react');
var pkg   = require('./../package.json');

//
var config = pkg.config;
var relative = '../';

//
reqly.server(config.port, {
  privatePath: path.join(relative, config.privatePath),
  privateFile: config.privateFile,

  publicPath:  path.join(relative, config.publicPath),
  publicFile:  config.publicFile
});
