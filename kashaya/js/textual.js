/*

  textual.js - a standalone library for various string-processing utilities
  
  should also work with nodejs. 

  © 2010 Patrick Hall
  pathall@gmail.com

  MIT License

  (for freaky export business, see: http://caolanmcmahon.com/writing_for_node_and_the_browser.html )


*/
(function(exports){

    exports.trim = function(text){
      var rtrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;
      return (text || "").replace( rtrim, "" );
    };
    
    exports.extractLines = function(text){
      return trim(text).split(/\n+/);
    };
    
    exports.sedG = function(text){
      // not sure what to call this -- intersperse lines
      // with blank lines 
      return text.replace(/\n/g, '\n\n');
    };

    exports.squish = function(text){
      // compress all whitespace
      var text = text.replace(/\n/g, ' ');
      text = text.replace(/ +/g, ' ');
      return text; 
    };

    exports.splitSentences = function(text){
      var delimiters = '.?!'
        , pattern
        , sentencesAndDelimiters
        , sentence = ''
        , element = ''
        , sentences = [];

      pattern = '([' + delimiters + '] )';
      var delimRE = new RegExp(pattern, 'g');
   
      sentencesAndDelimiters = text.split(delimRE)  ;

      for(var i=0; i < sentencesAndDelimiters.length; i++){
        element = sentencesAndDelimiters[i];
        if(element.match(delimRE)){
          sentence += element;
          sentences.push(sentence);
          sentence = '';
        } else {
          sentence += element;
        }
      }
      return sentences;
      
    };

    exports.removeBlankLines = function(text){
      var rawlines = text.split('\n'),
          lines = [];
       
      for (var i=0; i<rawlines.length; i++){
        var line = rawlines[i];
        if( $.trim(line).length ) { lines.push(line) }
      }
      return lines.join('\n');
    };

    exports.depunctuate = function(text){
      return text.replace(/[\.\?\!]/g, ' ');
    };

    exports.letters = function(text){
      return text.split('');
    };

    exports.frequency = function(sequence){
      var count = {};
      for (var i=0; i<sequence.length; i++){
        var elem = sequence[i];
        if ( elem in count ) {
          count[elem] += 1;
        } else {
          count[elem] = 1;
        }
      }
      return count;
    };

    exports.bag = function(sequence){
      var seen = []; 
      for (var elem in sequence){
        if (!sequence.hasOwnProperty(elem))
          continue 
        seen.push(elem) 
      }
      return seen; 
    };

    exports.charset = function(text){
      var cs = this.bag( this.frequency( this.letters(text)));
      cs.sort();
      return cs;
    };

    exports.alphabetize = function(sequence, alphabet){
      // alphabet contains the collation order 
      sequence.sort(function(a,b){
        return alphabet.indexOf(a) < alphabet.indexOf(b) ? -1 : 1;
      });
      return sequence;
    };

    exports.tokenize = function(text){
      return this.trim(this.depunctuate(text)).toLowerCase().split(/[ ]+/);
    };

    exports.zip = function(a, b){
      // like python zip
      result = [];
      for(var i=0; i<a.length;i++){
        result.push( [a[i], b[i]] );
      }
      return result;
    }

})(typeof exports === 'undefined'? this['textual']={}: exports);
