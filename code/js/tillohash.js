
var Lex = {

  init : function(settings){
    Lex.settings = settings;
    $('#line').bind('keydown', 'return', Lex.add);
    $('#showPhrases').bind('click', Lex.showPhrases);
    $('#savePhrases').bind('click', Lex.savePhrases);
  },

  phrases : [],

  add : function(){
    var $line = $('#line')
    var phrase = $.trim($line.val());
    if (phrase.length > 0) { 
      Lex.phrases.push(phrase); 
      $('#phrases').append('<li>' + phrase + '</li>');
      $line.val('');
    };
  },

  showPhrases : function(){ 
    $('#phrases').empty()
    $.each(Lex.phrases, function(i, phrase){
      //$('#phrases').append('<li>' + phrase + '</li>');
    })
  },

  savePhrases : function(){
    console.log(Lex.settings.projectName);
    localStorage[Lex.settings.projectName] = JSON.stringify(Lex.phrases);
  }


};

$(function(){
  Lex.init({
    projectName: $('#text').val()    
  })
})
