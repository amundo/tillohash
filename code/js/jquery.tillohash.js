/*

jquery.tillohash.js -- jQuery based transliteration module

MIT license 


*/

(function($){

  $.fn.tillohash = function(options){

    return this.each(function(){

      var opts = $.extend({}, $.fn.tillohash.defaults, options);

      var $input = $(this);

      $input
        .keyup(function(e){
          switch(e.which){
            case(13): // ENTER
              var text = $(this).val();
              var words = $.fn.tillohash.tokenize(text);
              var spans = $.map(words, $.fn.tillohash.spanify);
              var spans = spans.join(' ') ;
              $('ol#sentences').append('<li>'+spans+'</li>');
              break;

          }
        })

    });
  };

  $.fn.tillohash.defaults = { 
  };

  $.fn.tillohash.spanify = function(text){ 
    return "<span class=word>" + text + "</span>";
  }
  $.fn.tillohash.tokenize = function(text){ 
    return text.split(/[ ]+/);
  };

})(this.jQuery);
