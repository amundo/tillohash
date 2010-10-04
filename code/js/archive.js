var text = function(){

  var sentences = [];
  var words = [];

  function tokenize(sentence){
    return sentence.split(' ');
  }

  function addSentence(sentence){
    words.push(tokenize(sentence));
    sentences.push(sentence);
  } 

  function glossize(word, glosses){
    for(var i=0;i<glosses.length;i++){     
      
    }
  }

  return {
    words : words,
    sentences : sentences,
    addSentence : addSentence,
  }

}

var t = text();
t.addSentence('this is a sentence');
console.log(t.sentences);
console.log(t.words);
