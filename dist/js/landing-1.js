"use strict";

let landing1TabsSwiper = new Swiper('.tabs-swiper-container', {
	speed: 400,
	slidesPerView: 2,
	spaceBetween: 45,
	observer: true,
	centeredSlides: false,
	grabCursor: true,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
	breakpoints: {
		500: {
			slidesPerView: 3,
			centeredSlides: true,
		},

		600: {
			slidesPerView: 4,
			centeredSlides: false,
		},

		900: {
			slidesPerView: 5,
			centeredSlides: true,
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
	pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
})
