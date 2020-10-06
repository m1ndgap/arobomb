"use strict";

const videoBtn = document.querySelector(`.index__video-play-btn`);
const videoMobileBtn = document.querySelector(`.index__video-mobile-btn`);
const videoModal = document.querySelector(`.index__video-modal`);
const video = videoModal.querySelector(`iframe`);
const videoBackdrop = document.querySelector(`.index__video-backdrop`);
const videoCloseBtn = document.querySelector(`.index__video-close`);
const videoLink = videoModal.querySelector(`iframe`).getAttribute(`src`);


const videoClose = function(){
    let viewport = document.body.clientWidth
    if (viewport > 1024) {
        videoModal.classList.remove(`index__video-modal--active`)
        indexSwiper.autoplay.start();
        video.remove();
    } else {
    }
};

videoBtn.addEventListener(`click`, function () {
        videoModal.classList.add(`index__video-modal--active`)
        indexSwiper.autoplay.stop();
        if (!videoModal.contains(video)) {
            videoModal.appendChild(video);
        }
})

videoMobileBtn.addEventListener(`click`, function () {
    window.location.href =  videoLink;
})

videoBackdrop.addEventListener(`click`, videoClose);

videoCloseBtn.addEventListener(`click`, videoClose);
