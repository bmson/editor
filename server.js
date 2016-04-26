// Dependencies
const fs    = require('fs');
const path  = require("path");
const reqly = require('reqly-react');
const pkg   = require('./package.json');

// Get variables from package.json
const { config: { port, input, output, symlink }, name } = pkg;

// Create symlink
const main = path.relative('./node_modules/', symlink);
fs.symlink(main, './node_modules/' + pkg.name, e => {});

// Create server
reqly.server(port, { input, output });
