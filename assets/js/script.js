$(document).ready(function () {
  // Slick slider
  $('.company-seniors').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: false
        }
      }
    ]
  });

  $(".hamburger").on("click", function () {
    $(this).toggleClass("open");     
    $(".nav-menu").fadeToggle();  
    $("body").toggleClass("menu-open");
  });

});
