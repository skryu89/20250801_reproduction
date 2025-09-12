$(document).ready(function () {
 //$('.company-seniors').slick({
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

function updateSlide() {
  const visual = document.querySelector('.visual-area');
  const windowWidth = window.innerWidth;

  const minWidth = 390;
  const maxWidth = 767;

  if (windowWidth <= minWidth) {
    visual.style.transform = 'translateX(0px)';
  } else if (windowWidth <= maxWidth) {
    const ratio = (windowWidth - minWidth) / (maxWidth - minWidth);
    const maxSlide = 200; 
    visual.style.transform = `translateX(${ratio * maxSlide}px)`;
  } else {
    visual.style.transform = 'translateX(0px)'; 
  }
}

window.addEventListener('load', updateSlide);
window.addEventListener('resize', updateSlide);

})