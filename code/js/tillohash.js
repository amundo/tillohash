var Lex = {

  init : function(settings){

    Lex.settings = settings;
    Lex.db = Lex.settings.projectName;
    Lex.phrases = [];

    $('#line').bind('keydown', 'return', Lex.add);
    $('#phrases').empty();
    $('#savePhrases').bind('click', Lex.commit);

  }

};


Lex.add = function(){
    var $line = $('#line');
    var phrase = $.trim($line.val());

    if (phrase.length > 0) { 
      Lex.phrases.push(phrase); 
      Lex.showPhrases(); 
      Lex.commit(); 
    }

    $line.val('');
};

Lex.commit = function(){
  localStorage[Lex.db] = JSON.stringify(Lex.phrases);
};

Lex.showPhrases = function(){
  $('#phrases').empty();
  $.each(Lex.phrases, function(i, phrase){
    $('#phrases').append('<li>' + phrase + '</li>');
  });
};

Lex.getPhrases = function(){
  return JSON.parse(localStorage[Lex.db]);
};

$(document).ready(function(){

  $(this).find('option[value=defaultProject]').select();

  Lex.init({
    projectName: 'defaultProject' 
  });

  $('#projects').bind('change', function(){
    var project = $(this).find('option:selected').val();

    Lex.init({
      projectName: $.trim(project) 
    });

  });

});
