(function ($) {
  ("use strict");

  var $win = $(window);
  var $nav = $('.navbar');
  var $top = $(".back-top i")
  $win.on('scroll', function () {

    var $scrolling = $(this).scrollTop();

    // add class sticky menu 
    if ($scrolling >= 50) {
        $nav.addClass("sticky-menu");
    } else {
        $nav.removeClass("sticky-menu");
    }

    // windows distance
    if ($scrolling >= 400) {
      $top.fadeIn();
    } else {
      $top.fadeOut();
    }
  });

  // back top
  $top.on('click', function () {
      $("html,body").animate({
          scrollTop: 0
      }, 0);
  });



  //banner slider
  $(".banner-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots:true,
        arrows:false,
        },
      },

      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots:true,
          arrows:false,
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

  // wow js
  new WOW().init();


})(jQuery);

// open mobile side menu
function openNav() {
  document.getElementById("mobileSideMenu").style.width = "260px";
  document.getElementById("mobileSideMenu").style.display = "block";
}

// hide mobile side menu
function closeNav() {
  document.getElementById("mobileSideMenu").style.width = "0";
  document.getElementById("mobileSideMenu").style.display = "block".fadeIn();
}

// outside click mobile side menu hide
window.onload = function() {
  var hidediv = document.getElementById('mobileSideMenu');
  document.onclick = function(div) {
    if (!div.target.closest('#mobileSideMenu') && hidediv.style.display != "none" && !div.target.closest('.navbar-toggler')) {
        hidediv.style.display = "none"
    }
  }
}