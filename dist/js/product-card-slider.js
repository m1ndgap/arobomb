"use strict";

/* Swiper
**************************************************************/
var swiper= Swiper;
var init = false;

const swiperParamsMobile = {
    speed: 400,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    }
}

/* Which media query
**************************************************************/
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            console.log(12312)
            init = true;
            swiper = new Swiper('.product__mobile-slider', swiperParamsMobile);
        }

    }

    // Disable (for tablet)
    else if(tablet.matches) {
        swiper.destroy();
        init = false;
    }

    // Disable (for desktop)
    else if(desktop.matches) {
        swiper.destroy();
        init = false;
    }
}

/* On Load
**************************************************************/
window.addEventListener('load', function() {
    swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
    swiperMode();
});
