/*

  textual.js - a standalone library for various string-processing utilities
  
  should also work with nodejs. 

  © 2010 Patrick Hall
  pathall@gmail.com

  MIT License

*/
var textual = {

    trim : function(text){
      var rtrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;
      return (text || "").replace( rtrim, "" );
    },
    
    extractLines : function(text){
      return trim(text).split(/\n+/);
    },
    
    removeBlankLines : function(text){
      var rawlines = text.split('\n'),
          lines = [];
       
      for (var i=0; i<rawlines.length; i++){
        var line = rawlines[i];
        if( $.trim(line).length ) { lines.push(line) }
      }
      return lines.join('\n');
    },

    depunctuate : function(text){
      return text.replace(/[\.\?\!]/g, ' ');
    },

    letters : function(text){
      return text.split('');
    },

    frequency : function(sequence){
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
    },

    bag : function(sequence){
      var seen = []; 
      for (var elem in sequence){
        if (!sequence.hasOwnProperty(elem))
          continue 
        seen.push(elem) 
      }
      return seen; 
    },

    charset : function(text){
      var cs = this.bag( this.frequency( this.letters(text)));
      cs.sort();
      return cs;
    },

    alphabetize : function(sequence, alphabet){
      // alphabet contains the collation order 
      sequence.sort(function(a,b){
        return alphabet.indexOf(a) < alphabet.indexOf(b) ? -1 : 1;
      });
      return sequence;
    },

    tokenize : function(text){
      return this.trim(this.depunctuate(text)).toLowerCase().split(/[ ]+/);
    },

    zip : function(a, b){
      // like python zip
      result = [];
      for(var i=0; i<a.length;i++){
        result.push( [a[i], b[i]] );
      }
      return result;
    }

    sedG : function(text){
      // not sure what to call this -- intersperse lines
      // with blank lines 
      return text.replace(/\n/g, '\n\n');
    },

    squish : function(text){
      // compress all whitespace
      var text = text.replace(/\n/g, ' ');
      text = text.replace(/ +/g, ' ');
      return text; 
    },

    splitSentences : function(text){
      var delimiters = '.?!',
          pattern = '',
          parts = [];

      pattern = '([' + delimiters + '] )';
      var re = new RegExp(pattern, 'g');
   
      return text.split(re)  ;
    },


}

if(typeof(exports) !== 'undefined' && exports !== null) {
  exports.textual = textual; 
}
    
