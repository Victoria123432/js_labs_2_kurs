var mySwiper = new Swiper(".swiper-container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 1000, 
  autoplay: {
    delay: 5000, 
    disableOnInteraction: true, 
  },

  
});
var sliderContainer = document.querySelector('.swiper-container');

sliderContainer.addEventListener('mouseenter', function () {
  mySwiper.autoplay.stop(); 
});

sliderContainer.addEventListener('mouseleave', function () {
  mySwiper.autoplay.start(); 
});