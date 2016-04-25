// Dependencies
const reqly = require('reqly-react');
const pkg   = require('./package.json');

//
const config = pkg.config;

//
reqly.server(config.port, {
  input: config.input,
  output: config.output
});
