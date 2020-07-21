"use strict";

const blobBtnSmallCls = `constructor__blob-btn--1`;
const blobBtnBigCls = `constructor__blob-btn--2`;


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

let currentBoxType = {};



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
