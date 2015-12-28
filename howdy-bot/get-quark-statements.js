#!/usr/bin/env node

var fs = require('fs');

fs.readFile('combined-ds9-scripts.txt', 'utf8', function(err, data) {
  if (err) console.log(err);
  var quarkLines = getQuarkLines(data);

  fs.writeFile('quarkStatements.txt', quarkLines, 'utf8', function(err) {
    if (err) console.log(err);
    console.log("Completed!");
  });
});

function getQuarkLines(data) {
  return data.replace(/[\t]/g, "").replace(/\n\n/g, "&&&").replace(/\n/g, "").split("&&&").filter(function(line) {
    return line.slice(0, 5) === "QUARK";
  }).map(function(line) {
    return line.slice(5).replace(/\(.*\)/g, "");
  });
};