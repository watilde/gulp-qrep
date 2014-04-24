var gutil = require('gulp-util');
var qrep = require('qrep');

module.exports = function (selector, opts) {
  'use strict';
  opts = opts || {
    encoding: 'utf8'
  };
  return qrep.stream(selector, stream, opts.encoding);
};
