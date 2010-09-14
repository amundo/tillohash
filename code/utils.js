function open(file){
  $('body').append($('<textarea/>', {
    css: {'visibility':'none'},
    id: 'a_temporary_textarea'   
  }));
  this.text = '';
  var textarea = $('a_temporary_textarea');
  textarea.load(file, function(){
    var content = textarea.val();
    this.text += content;
    //textarea.remove();
  });
  return  this.text;
}
