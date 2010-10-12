/*

jquery.transliterate.js -- jQuery based transliteration module

MIT license 

use me like this:

    $('input[lang=chr]').transliterate({table: 'chr.js'})
    $('#someinput').transliterate({table: 'eo.js'})


*/

(function($){

  $.fn.transliterate = function(options){

    return this.each(function(){
   
      $this = $(this);

      $this.keyup(function(e){

         var before = $this.val();
         var after = $.fn.transliterate.convert($this.val(), options.table);
         $this.val(after);

      })

    });
  };

  $.fn.transliterate.defaults = { 
    caseSensitive: true,
    viewTable: true
  };

  $.fn.transliterate.convert = function(plaintext, table){ 
    $.each(table, function(i, pairs){
      var before = pairs[0];
      var after = pairs[1];
      var pattern = new RegExp(before, 'g');
      plaintext = plaintext.replace(pattern, after, 'g');
    });
    return plaintext;
  };

  $.fn.transliterate.viewTable = function (table){
    var htmltable = ['<table class="rules"><tr><th>type:</th><th>get:</th></tr>'];
    $.each(table, function(i, pairs){
      var before = pairs[0];
      var after = pairs[1];
      htmltable.push("<tr><td class='inputKey'>"+before+"</td><td class='outputLetter'>"+after+"</td></tr>");
    });
    htmltable.push('</table>');
    return htmltable.join('\n');
  };

  $.fn.transliterate.viewDiv = function (table){
    var div = ['<div class="rules">'];
    $.each(table, function(i, pairs){
      var before = pairs[0];
      var after = pairs[1];
      div.push("<span class='pair'><span class='before'>"+before+"</span>&nbsp;&rarr;&nbsp;<span class='before'>"+after+"</span></span>");
    });
    div.push('</div>');
    return div.join('\n');
  };


})(this.jQuery);
