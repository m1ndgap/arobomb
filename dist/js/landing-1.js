"use strict";

let landing1TabsSwiper = new Swiper('.tabs-swiper-container', {
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },

    500: {
      slidesPerView: 3,
    },

    600: {
      slidesPerView: 4,
      centeredSlides: false,
    },

    900: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  } 
});

let landing1PartnersSwiper = new Swiper('.partners-swiper-container', {
  speed: 400,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})