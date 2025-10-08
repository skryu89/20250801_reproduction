$(document).ready(function () {
  $('.company-seniors').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
    speed: 500,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
    const maxSlide = 10; 
    visual.style.transform = `translateX(${ratio * maxSlide}px)`;
  } else {
    visual.style.transform = 'translateX(0px)'; 
  }
}

window.addEventListener('load', updateSlide);
window.addEventListener('resize', updateSlide);

})

document.addEventListener('DOMContentLoaded', function() {

  const recruitLink1 = document.querySelector('.recruit-link-1');

  if (recruitLink1) {
    recruitLink1.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.add('clicked');
      const destination = this.href;
      setTimeout(function() {
        window.location.href = destination;
      }, 300);
    });
  }

  const recruitLink2 = document.querySelector('.recruit-link-2');

  if (recruitLink2) {
    recruitLink2.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.add('clicked');
      const destination = this.href;
      setTimeout(function() {
        window.location.href = destination;
      }, 300);
    });
  }

});

 window.addEventListener('pagehide', function() {
    if (recruitLink1) {
      recruitLink1.classList.remove('clicked');
    }
    if (recruitLink2) {
      recruitLink2.classList.remove('clicked');
    }
});

function applyZoomScale() {
  const zoom = window.devicePixelRatio;
  const visual = document.querySelector('.visual-area');
  if (!visual) return;

  // 100% の時はスケール 1、それ以外はズーム率に合わせる
  if (zoom === 2) {
    visual.style.transform = 'scale(1)';
  } else {
    // ズームが 1.25 (125%) なら 0.8倍に縮めるなど
    visual.style.transform = `scale(${5 / zoom})`;
  }
}

// 読み込み・リサイズ時に適用
applyZoomScale();
window.addEventListener('resize', applyZoomScale);