// for each sentence, for each word, get # of occurrences from knowledge base
  // —>might need to index knowledge base:  index with key words, sentences associated with those key words, 
  // and # of times they occur
// group together keywords that have most # of occurrences
// get the sentences associated with those keywords and weight them with probabilities
// use randomization and probability magic to choose from those sentences…

var fs = require('fs');

fs.readFile('quarkStatements.txt', 'utf8', function(err, data) {
  var knowledgeBase = {};

  var lines = data.split("&&&");
  for (var i = 0; i < lines.length; i++) {
    var sentences = lines[i].split(".");

    for (var j = 0; j < sentences.length; j++) {
      var sentence = sentences[j].trim().replace(/\s{2,}/g, " ");
      var words = sentence.split(" ");

      for (var k = 0; k < words.length; k++) {
        var word = words[k].trim().toLowerCase()
          .replace(/^[.,-\/#!?$%\^&\*;:{}=+\-_`~()\d]*/, "")
          .replace(/[.,-\/#!?$%\^&\*;:{}=+\-_`~()\d]*$/, "");

        if (knowledgeBase[word]) {
          knowledgeBase[word]["numOccurences"]++;
          knowledgeBase[word]["occursIn"].push(sentence);
        } else if (word !== "") {
          knowledgeBase[word] = {
            numOccurences: 1,
            occursIn: [sentence]
          };
        }
      }
    }
  }

  fs.writeFile('knowledgeTest.txt', JSON.stringify(knowledgeBase), function(err) {
    if (err) console.log(err);
  })
});
