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

  $('img.lazy').lazyload();

  $('#year').text(new Date().getFullYear());

  $.get('/static/data/countries.json', function (countries) {
    var visited = countries['visited'];
    var data = {};
    ['lived', 'visited'].forEach(function (category) {
      countries[category].forEach(function (obj) {
        data[obj['code']] = { fillKey: category };
      });
    });

    var map = new Datamap({
      responsive: true,
      element: document.getElementById('world-map'),
      fills: {
        visited: '#d97b29',
        lived: '#ca5c1c',
        defaultFill: '#c5d3d9'
      },
      geographyConfig: {
        highlightOnHover: false,
        popupOnHover: false
      },
      data: data
    });

    $(window).on('resize', function() {
      map.resize();
    });
  });
});
