$(function() {
  console.log('Hello Bootstrap5');
});

var swiper = new Swiper(".mySwiper", {
  
  slidesPerView: 1,
  spaceBetween: 8,
  autoHeight: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
AOS.init();