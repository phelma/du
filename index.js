'use strict';

let exec = require('child_process').execFile;
let regex = /^(\d*)/;

module.exports = (path) => {
  return new Promise((res, rej) => {
    exec('du', ['-s', path], (err, stdout, stderr) => {
      let matches = stdout.match(regex);
      if (!err && !stderr && matches && matches.length > 1){
        res(matches[1]);
      } else {
        rej(err, stderr, stdout);
      }
    });
  });
};
