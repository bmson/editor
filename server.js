// Dependencies
const fs    = require('fs');
const path  = require("path");
const reqly = require('reqly-react');
const pkg   = require('./package.json');

// Get variables from package.json
const { config: { port, input, output, symlink }, name } = pkg;

// Create symlink
reqly.symlink(symlink, name);

// Create server
reqly.server(port, { input, output });
