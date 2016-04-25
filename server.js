// Dependencies
const fs    = require('fs');
const reqly = require('reqly-react');
const pkg   = require('./package.json');

//
const config = pkg.config;
const name   = pkg.name;

// Create symlink
fs.symlink('./../src', './node_modules/' + pkg.name, e => {});

//
reqly.server(config.port, {
  input:  config.input,
  output: config.output
});
