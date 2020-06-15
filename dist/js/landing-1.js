"use strict";

let landing1TabsSwiper = new Swiper('.tabs-swiper-container', {
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

let landing1PartnersSwiper = new Swiper('.partners-swiper-container', {
  speed: 400,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})