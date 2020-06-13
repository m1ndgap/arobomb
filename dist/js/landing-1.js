"use strict";

var landingSwiper = new Swiper('.swiper-container', {
  speed: 400,
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});