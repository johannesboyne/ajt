#!/usr/bin/env node
var fs = require('fs');
var templatizer = require('templatizer');

function showHelp () {
  var ajt = 'ajt v' + require('./package.json').version + '\n';
  process.stdout.write(ajt + Array(ajt.length).join('-') + '\n\n');
  fs.createReadStream(__dirname + '/cmd.txt').pipe(process.stdout);
  return;
}

if (!module.parent) {
  if (process.argv.length < 3) { return showHelp(); }

  for (var i = process.argv.length - 1; i >= 0; i--) {
    if (process.argv[i] === '-h') { showHelp(); return; }
    else if (process.argv[i] === '-v') { process.stdout.write('ajt v' + require('./package.json').version + '\n'); return; }
  }

  var templates = [], outputFile;
  process.argv.map(function (element, index) {
    if (element === '-t') templates.push(process.cwd() + '/' + process.argv[++index]);
    else if (element === '-o')
      outputFile = process.cwd() + '/' + process.argv[++index];
  });
  var _ajt = ajt(templates, outputFile);
  if (!outputFile) process.stdout.write(_ajt);
}

function ajt (templateDirectories, outputFile) {
  var output = templatizer(templateDirectories) + fs.readFileSync(__dirname + '/ajt.js', 'utf8');

  if (outputFile) fs.writeFileSync(outputFile, output);
  return output;
}

module.exports = ajt;