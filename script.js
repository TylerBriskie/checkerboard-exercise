$(document).ready(function() {

  populateCheckerBoard();
  colorBoard();




  function populateCheckerBoard() {
      for (var i = 0; i < 8; i++) {
          $('body').append('<div class="row"></div>');
          for (var j = 0; j < 8; j++) {
              if ((j + i + 10) % 2 === 0) {
                  $('.row:last-child').append('<div class="black"></div>');
              } else {
                  $('.row:last-child').append('<div class="red"></div>');
              }
          }
      }
  };

  function colorBoard(){
    $('.black').css('background-color','black').css('width','12%').css('float','left').css('paddingBottom','12%');
    $('.red').css('background-color','red').css('width','12%').css('float','left').css('paddingBottom','12%');
  };

});
