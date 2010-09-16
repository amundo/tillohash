
var Lex = {

  init : function(settings){
    Lex.settings = settings;
    $('#line').bind('keydown', 'return', Lex.add);
    $('#showWords').bind('click', Lex.showWords);
    $('#saveWords').bind('click', Lex.saveWords);
  },

  words : [],

  add : function(){
    var $line = $('#line')
    var word = $.trim($line.val());
    if (word.length > 0) { 
      Lex.words.push(word); 
      $line.val('');
    };
  },

  showWords : function(){ 
    console.log(Lex.words); 
  },

  saveWords : function(){
    console.log(Lex.settings.projectName);
    localStorage[Lex.settings.projectName] = JSON.stringify(Lex.words);
  }


};

$(function(){
  Lex.init({
    projectName: $('#text').val()    
  })
})
