'use strict';

let exec = require('child_process').execFile;
let regex = /^(\d*)/;

module.exports = (path) => {
  return new Promise((res, rej) => {
    exec('du', ['-ks', path], (err, stdout, stderr) => {
      let matches = stdout.match(regex);
      let kbytes = matches[1];
      let bytes = kb * 1024;
      if (!err && !stderr && matches && matches.length > 1){
        res(bytes);
      } else {
        rej(err, stderr, stdout);
      }
    });
  });
};
