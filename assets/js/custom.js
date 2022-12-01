(function ($) {
  ("use strict");

  var $win = $(window);
  var $nav = $('.navbar');
  var $top = $(".back-top i")
  $win.on('scroll', function () {

    var $scrolling = $(this).scrollTop();

    if ($scrolling >= 50) {
        $nav.addClass("sticky-menu");
    } else {
        $nav.removeClass("sticky-menu");
    }

    // back to top
    if ($scrolling >= 400) {
      $top.fadeIn();
    } else {
      $top.fadeOut();
    }
  });

  $top.on('click', function () {
      $("html,body").animate({
          scrollTop: 0
      }, 0);
  });



  //banner slider
  $(".banner-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    fade:true,
    pauseOnHover: false,
  });

  //inventory slider
  $(".inventory-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  
  //Themes slider
  $(".themes-item-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover:false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  
  //Plugins slider
  $(".plugins-item-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    pauseOnHover:false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  new WOW().init();

})(jQuery);