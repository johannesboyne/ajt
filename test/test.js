var assert = require('assert');
var fs = require('fs');
var ajt = require('./../index');

var t1 = __dirname.replace(/test/, '') + 'example/jadeTemplates';
var t2 = __dirname.replace(/test/, '') + 'example/moreTemplates';

var isJS = ajt([t1, t2], __dirname + '/../example/myoutput.js');
var shouldJS = fs.readFileSync(__dirname + '/../example/myoutput.js');

assert.equal(isJS, shouldJS, 'message');