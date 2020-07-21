"use strict";

const mobBtnCls = `constructor__box-mobile-selector-span`;
const boxBlocks = ``

let constructorBlobs = document.querySelectorAll(`.constructor-blob-svg`);

constructorBlobs.forEach(function (blob) {
    let parent = blob.parentElement;
    let animate = blob.querySelector(`animate`)
    parent.addEventListener(`mouseenter`, function(){
        if (blob.animationsPaused()) {
            blob.unpauseAnimations();
        } else {
            animate.beginElement();
        }
    })

    parent.addEventListener(`mouseleave`, function(){
        blob.pauseAnimations();
    })
})

let mobileBtns = document.querySelectorAll(`.${mobBtnCls}`);
let box1 = document.querySelector(`.js-box-1-mobile`);
let box2 = document.querySelector(`.js-box-2-mobile`);


mobileBtns.forEach(function(btn){
    btn.addEventListener(`click`, function(evt){
        evt.preventDefault();
        let type = this.dataset.boxtype;

        let isActive = this.classList.contains(`${mobBtnCls}--active`);
        if (type == "small" && !isActive) {
            box1.classList.add(`js-box-1-mobile-active`)
            box1.classList.remove(`js-box-1-mobile-inactive`)
            box2.classList.remove(`js-box-2-mobile-active`)
            box2.classList.add(`js-box-2-mobile-inactive`)
            currentBoxType = boxTypes.small;
        } else if (type == "big" && !isActive) {
            box2.classList.add(`js-box-2-mobile-active`)
            box2.classList.remove(`js-box-2-mobile-inactive`)
            box1.classList.remove(`js-box-1-mobile-active`)
            box1.classList.add(`js-box-1-mobile-inactive`)
            currentBoxType = boxTypes.big;
        }

        mobileBtns.forEach(function (mbBtn) {
            mbBtn.classList.remove(`${mobBtnCls}--active`)
        })
        this.classList.add(`${mobBtnCls}--active`);

    })
})

box1.addEventListener(`click`, function(){
    if (box1.classList.contains(`js-box-1-mobile-inactive`)) {
        box1.classList.add(`js-box-1-mobile-active`)
        box1.classList.remove(`js-box-1-mobile-inactive`)
        box2.classList.remove(`js-box-2-mobile-active`)
        box2.classList.add(`js-box-2-mobile-inactive`)

        mobileBtns.forEach(function (mbBtn) {
            if (mbBtn.dataset.boxtype !== "small") {
                mbBtn.classList.remove(`${mobBtnCls}--active`)
            } else {
                mbBtn.classList.add(`${mobBtnCls}--active`)
            }
        })
    }
})

box2.addEventListener(`click`, function(){
    if (box2.classList.contains(`js-box-2-mobile-inactive`)) {
        box2.classList.add(`js-box-2-mobile-active`)
        box2.classList.remove(`js-box-2-mobile-inactive`)
        box1.classList.remove(`js-box-1-mobile-active`)
        box1.classList.add(`js-box-1-mobile-inactive`)

        mobileBtns.forEach(function (mbBtn) {
            if (mbBtn.dataset.boxtype !== "big") {
                mbBtn.classList.remove(`${mobBtnCls}--active`)
            } else {
                mbBtn.classList.add(`${mobBtnCls}--active`)
            }
        })
    }
})
