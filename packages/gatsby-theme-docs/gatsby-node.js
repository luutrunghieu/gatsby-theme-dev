const path = require('path');
const withDefaults = require('./utils/default-options');
const fs = require('fs');
const mkdirp = require('mkdirp');

exports.onPreBootstrap = ({store}, options) => {
  const {program} = store.getState();
  const  {contentPath} = withDefaults(options);
  const dir = path.join(program.directory, contentPath);
  if(!fs.existsSync(dir)){
    mkdirp.sync(dir);
  }
} 