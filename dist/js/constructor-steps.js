"use strict";

const blobBtnSmallCls = `constructor__blob-btn--1`;
const blobBtnBigCls = `constructor__blob-btn--2`;
const tabCls = `constructor__tab`;
const indexCls = `constructor__index`;
const catalogCls = `catalog__wrapper`;

const uiCls = `constructor__ui`;
const currItemNumCls = `constructor__ui-current-num`;
const maxItemNumCls = `constructor__ui-max-num`;
const itemsUICls = `constructor__ui-items`;

let currentStep = 1;
let currentBox = {
    aromas: {},
    souvenirs: {}
}

const boxTypes = {
    small: {
        souvenirs: 2,
        aromas: 6,
        price: 1500
    },
    big: {
        souvenirs: 6,
        aromas: 12,
        price: 3500
    },
}

let currentBoxType = boxTypes.small;

function goToStep1(){
    currentBoxType = boxTypes.small;
}

function goToStep2(){
    index.classList.remove(`${indexCls}--active`);
    catalog.classList.add(`${catalogCls}--active`);
    ui.classList.add(`${uiCls}--active`);
    currentStep = 2;
    switchTabs();
    setupUI();
    updateUI();
    filter();
}

function goToStep3(){
    currentStep = 3;
    switchTabs();
    setupUI();
    updateUI();
    filter();
}

function setupUI() {
    if (currentStep == 2) {
        maxItemNum.innerText = currentBoxType.souvenirs;
    } else if (currentStep == 3) {
        maxItemNum.innerText = currentBoxType.aromas;
    }
}

function updateUI() {
    let aromasEmpty = Object.keys(currentBox.aromas).length === 0 && currentBox.aromas.constructor === Object
    let souvenirsEmpty = Object.keys(currentBox.souvenirs).length === 0 && currentBox.souvenirs.constructor === Object
    if (currentStep == 2) {
        if (souvenirsEmpty) {
            let html = document.createElement(`div`)
            for (let i = 0; i < currentBoxType.souvenirs; i ++) {
                html.innerHTML += drawUIItem();
            }
            itemsUI.innerHTML = html.innerHTML
        } else {
            for (const property in currentBox.souvenirs) {
                if (currentBox.souvenirs.hasOwnProperty(property)) {
                    console.log(123)
                }
            }
        }
    }

    if (currentStep == 3) {
        if (aromasEmpty) {
            let html = document.createElement(`div`)
            for (let i = 0; i < currentBoxType.aromas; i++) {
                html.innerHTML += drawUIItem();
            }
            itemsUI.innerHTML = html.innerHTML
        } else {
            for (const property in currentBox.aromas) {
                if (currentBox.aromas.hasOwnProperty(property)) {
                    console.log(123)
                }
            }
        }
    }
}

function drawUIItem(img = "") {
    const imgFull = img == "" ? `constructor__ui-item--full` : ``;

    return `<li class="constructor__ui-item ${imgFull}">
                    <img src="${img}" alt="order item">
                </li>`
}

function disableTabs(){
    constructorTabs.forEach(function(tab){
        tab.classList.remove(`${tabCls}--active`)
        tab.classList.remove(`${tabCls}--submenu`)
        tab.classList.add(`${tabCls}--disabled`)
    })
}

function switchTabs(){
    disableTabs()
    switch (currentStep) {
        case 1:
            constructorTabs[0].classList.add(`${tabCls}--active`)
            constructorTabs[0].classList.remove(`${tabCls}--disabled`)
            break
        case 2:
            constructorTabs[0].classList.add(`${tabCls}--active`)
            constructorTabs[0].classList.remove(`${tabCls}--disabled`)
            constructorTabs[1].classList.add(`${tabCls}--active`)
            constructorTabs[1].classList.add(`${tabCls}--submenu`)
            constructorTabs[1].classList.remove(`${tabCls}--disabled`)
            break
        case 3:
            constructorTabs[0].classList.add(`${tabCls}--active`)
            constructorTabs[0].classList.remove(`${tabCls}--disabled`)
            constructorTabs[1].classList.add(`${tabCls}--active`)
            constructorTabs[1].classList.remove(`${tabCls}--submenu`)
            constructorTabs[1].classList.remove(`${tabCls}--disabled`)
            constructorTabs[2].classList.add(`${tabCls}--active`)
            constructorTabs[2].classList.add(`${tabCls}--submenu`)
            constructorTabs[2].classList.remove(`${tabCls}--disabled`)
            break
    }
}


let constructorTabs = document.querySelectorAll(`.${tabCls}`);
switchTabs();

let index = document.querySelector(`.${indexCls}`);
let catalog = document.querySelector(`.${catalogCls}`);
let ui = document.querySelector(`.${uiCls}`);

let currItemNum = document.querySelector(`.${currItemNumCls}`)
let maxItemNum = document.querySelector(`.${maxItemNumCls}`)
let itemsUI = document.querySelector(`.${itemsUICls}`)

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
