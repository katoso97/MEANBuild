$(function() {

  setInterval(function() {

    $('.full-height').css({
      'height': $(window).height(),
      'padding': '20px'
    });

    $('.full-height-adjusted').css({
      'height': $(window).height() - $('#header').outerHeight(),
      'padding': '20px'
    });

  }, 10);

});
