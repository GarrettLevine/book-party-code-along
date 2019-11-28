'use strict';

const init = require('init-package-json');
const path = require('path');

const initFile = path.resolve(__dirname, 'project-init.js');

const dir = process.cwd();

const configDir = { some: 'some-extra' };

init(dir, initFile, configDir, (err, data) => {
  if (err) {
    console.log(err);
    throw err;
  }

  console.log(data);
});
