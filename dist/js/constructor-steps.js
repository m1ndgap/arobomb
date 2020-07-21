"use strict";

const blobBtnSmallCls = `constructor__blob-btn--1`;
const blobBtnBigCls = `constructor__blob-btn--2`;
const tabCls = `constructor__tab`;
const indexCls = `constructor__index`;
const catalogCls = `catalog__wrapper`;


const boxTypes = {
    big: {
        souvenirs: 6,
        aromas: 12,
        price: 3500
    },
    small: {
        souvenirs: 2,
        aromas: 6,
        price: 1500
    }
}

let currentBoxType = boxTypes.small;

function goToStep1(){
    currentBoxType = boxTypes.small;
}

function goToStep2(){
    index.classList.remove(`${indexCls}--active`);
    catalog.classList.add(`${catalogCls}--active`);
}

function goToStep3(){

}

let constTabs = document.querySelectorAll(`.${tabCls}`);
let index = document.querySelector(`.${indexCls}`);
let catalog = document.querySelector(`.${catalogCls}`);
let blobBtnSmall = document.querySelector(`.${blobBtnSmallCls}`);
let blobBtnBig = document.querySelector(`.${blobBtnBigCls}`);

blobBtnSmall.addEventListener(`click`, function(evt){
    evt.preventDefault();
    currentBoxType = boxTypes.small;
});

blobBtnBig.addEventListener(`click`, function(evt){
    evt.preventDefault();
    currentBoxType = boxTypes.big;
});
