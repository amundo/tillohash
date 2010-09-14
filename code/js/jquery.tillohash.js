/*

jquery.tillohash.js -- jQuery based transliteration module

MIT license 


*/

(function($){

  $.fn.tillohash = function(){

    return this.each(function(){

      var $input = $(this);

      $input.bind('keydown', 'return', function(e){
              var text = $(this).val();
              $(this).val('').focus();
              var words = $.fn.tillohash.tokenize(text);
              var spans = $.map(words, $.fn.tillohash.spanify);
              var spans = spans.join(' ') ;
              $('ul#sentences').prepend('<li>'+spans+'</li>');
      });

      $('#sentences li').live('dblclick', function(){
        $input.val($(this).text()); 
        $(this).remove(); 
      }) 

    });
  };

  $.fn.tillohash.spanify = function(text){ 
    return "<span class=word>" + text + "</span>";
  };

  $.fn.tillohash.tokenize = function(text){ 
    return text.split(/[ ]+/);
  };

})(this.jQuery);
