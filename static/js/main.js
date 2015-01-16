$(document).ready(function() {
  var navPosition = $('nav').offset().top;

  $(document).on('scroll', function() {
    if ($(window).scrollTop() >= navPosition) {
      $('nav').addClass('fixed');
      $('.content-section').addClass('with-navbar-padding');
    } else {
      $('nav').removeClass('fixed');
      $('.content-section').removeClass('with-navbar-padding');
    }
  });

  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();

    if ($.attr(this, 'href').length > 0) {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
    }

    return false;
  });
});
