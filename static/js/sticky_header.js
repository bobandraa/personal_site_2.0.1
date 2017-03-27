$(document).ready(function(){
  $(window).bind('scroll ontouchmove', function() {
    var navHeight = $( window ).height() - 87;
    if (window.pageYOffset > navHeight) {
      $('.nav').addClass('fixed');
    }
    else {
      $('.nav').removeClass('fixed');
    }
  });
});
