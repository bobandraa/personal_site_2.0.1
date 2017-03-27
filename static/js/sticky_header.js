$(document).ready(function(){
  $(window).bind('scroll touchmove', function() {
    var navHeight = $( window ).height() - 87;
    if ($(window).scrollTop() > navHeight) {
      $('.nav').addClass('fixed');
    }
    else {
      $('.nav').removeClass('fixed');
    }
  });
});
