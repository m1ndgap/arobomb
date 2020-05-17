"use strict";

let swirlCls = 'slider__animation-swirl';
let slideTopCls = 'slider__animation-slide-top';
let slideBotmCls = 'slider__animation-slide-bottom';
let textElCls = 'index__product-title';
let textSubTitleCls = 'index__product-type';
let textTitleCls = 'index__product-name';
let linkCls = 'index__more-info-btn';

let clearAnimationSwirl = (el) => {
    let figures = el.querySelectorAll("[data-animation='type-1']")
    figures.forEach((fig) => {
        let swirly = fig.querySelector('.' + swirlCls);
        swirly.classList.remove(swirlCls + '--animate')
    })
}

let clearAnimationSlide = (el) => {
    let figures = el.querySelectorAll("[data-animation='type-2']")
    figures.forEach((fig) => {
        let slideBot = fig.querySelector('.' + slideBotmCls);
        let slideTop = fig.querySelector('.' + slideTopCls);
        slideBot.classList.remove(slideBotmCls + '--animate')
        slideTop.classList.remove(slideTopCls + '--animate')
    })
}

let resetPGBanimation = () => {
    let el = document.getElementById('progress-bar');
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = null;
}


let initText = (slider, titleEl, subTitleEl) => {
    let firstSlide = slider.querySelector('.swiper-slide')
    let fsTitleText = firstSlide.dataset.title
    let fsSubtitleText = firstSlide.dataset.subtitle
    titleEl.innerHTML = splitText(fsTitleText);
    subTitleEl.innerHTML = splitText(fsSubtitleText);
}

let splitText = (str) => {
    let spans = str.split('');
    return spans.map((symbol) => `<span>${symbol}</span>`).join('\n');
}

let setText = (titleEl, subtitleEl, titleTxt, subTitleTxt) => {
    titleEl.innerHTML = splitText(titleTxt);
    subtitleEl.innerHTML = splitText(subTitleTxt);
}

let updateText = (textEl, timeout, timeoutInterval, hideTimeout) => {
    let spans = textEl.querySelectorAll('span');
    spans.forEach((span, i) => {
        setTimeout(() => {
            span.style['animation-name'] = `letterShow`;
            span.style['animation-delay'] = `0s`;
            span.style['animation-duration'] = `500ms`;
            span.style['animation-fill-mode'] = `forwards`;
        }, timeout + i*timeoutInterval);
        setTimeout(() => {
            span.style['animation-name'] = `letterHide`;
            span.style['animation-delay'] = `0s`;
            span.style['animation-duration'] = `500ms`;
            span.style['animation-fill-mode'] = `forwards`;
        }, hideTimeout + i*timeoutInterval)
    })
}

let updateLink = (slide, linkEl) => {
    linkEl.setAttribute('href', slide.dataset.url);
}

let swiperParams = {
    speed: 300,
    loop: true,
    simulateTouch: false,
    allowTouchMove: false,
    preloadImages: true,
    updateOnImagesReady: true,
    effect: 'fade',
    autoplay:{
        delay: 5000,
        disableOnInteraction: false,
    },
    fadeEffect: {
        crossFade: true
    },
    on: {
        init: function(){
            this.autoplay.stop();
        },
        imagesReady: function(){
            this.el.classList.remove('loading');
            this.autoplay.start();
        },
        slideChangeTransitionStart: function () {
            let swiper = this,
                nextSlide = swiper.el.querySelector('.swiper-slide-active'),
                titleText = nextSlide.dataset.title,
                subTitleText = nextSlide.dataset.subtitle;
            setText(titleEl, subTitleEl, titleText, subTitleText)
            updateText(titleEl, 450, 50, 4500)
            updateText(subTitleEl, 50, 50, 4200)
            updateLink(nextSlide, linkEl)
        },
        slideChangeTransitionEnd: function () {
            resetPGBanimation();
            let swiper = this,
                activeSlide = swiper.el.querySelector('.swiper-slide-active'),
                prevSlide = swiper.el.querySelector('.swiper-slide-prev');

            if (activeSlide.dataset.animation === 'type-1') {
                let swirl = activeSlide.querySelector('.' + swirlCls)
                swirl.classList.add(swirlCls + '--animate')
            } else if (activeSlide.dataset.animation === 'type-2') {
                let slideTop = activeSlide.querySelector('.' + slideTopCls)
                let slideBtm = activeSlide.querySelector('.' + slideBotmCls)
                slideTop.classList.add(slideTopCls + '--animate')
                slideBtm.classList.add(slideBotmCls + '--animate')
            }

            if (prevSlide.dataset.animation === 'type-1') {
                clearAnimationSwirl(swiper.el);
            } else if (prevSlide.dataset.animation === 'type-2') {
                clearAnimationSlide(swiper.el);
            }
        },
    },
}


let sliderEl = document.querySelector('.swiper-container')
let linkEl = document.querySelector('.' + linkCls)
let subTitleEl = document.querySelector('.' + textSubTitleCls)
let titleEl = document.querySelector('.' + textTitleCls)
initText(sliderEl, titleEl, subTitleEl);

let indexSwiper = new Swiper(sliderEl, swiperParams);