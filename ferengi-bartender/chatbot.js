#!/usr/bin/env node

// find DS9 scripts and get character lines **ABLE TO EXTRACT LINES
// have enough for a test, maybe in the future a script will run
// get-quark-statements on multiple scripts and append to a file instead
// of writing a new one each time

var fs = require('fs');

var input = process.argv[2];
console.log(input);

fs.readFile('quarkStatements.txt', 'utf8', function(err, data) {
  if (err) console.log("Error reading quarkStatements: ", err);
  // choose response algorithm:
  // console.log(mapWords(data.split(" ")));
  console.log(randomSentence(data.split(".")));
});

// simplest solution is to return a random reply from the script
function randomSentence(dataArray) {
  var index = Math.floor(Math.random() * dataArray.length);
  return dataArray[index];
};

// parse the file quarkStatements
// create mapping of all actual words (not "connector words") to
  // another map of possible phrases afterwards (these include words 
  // up to last connector word) to probability of that phrase being
  // spoken

function mapWords(words) {
  // for every word
  for (var i = 0; i < words.length; i++) { 
    // need to replace any extraneous characters like whitespace, punctuation, or backslashes
    var word = words[i].replace(/\W|_+/g, "");
    // need to get words following until run out of non-connectors-->This part is murky
  }
};

// could also create a series of the short random statements to choose
// from like "You tell me" "You'll be the first one I call". Would be
// nice to figure out the best times to use these.

// while input doesn't equal "bye"
// parse input. pick out keywords. maybe anything that isn't in the 
  // non-words map could be a keyword. could maybe take the first word
  // that isn't a non-word for now and generate output based on that
// pick words from mapping from parsed file, randomly choose between
// possibilities with some weight given to options with higher likelihood
