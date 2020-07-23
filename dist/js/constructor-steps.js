"use strict";

const cartAddress = `./cart.html`

const blobBtnSmallCls = `constructor__blob-btn--1`;
const blobBtnBigCls = `constructor__blob-btn--2`;
const tabCls = `constructor__tab`;
const indexCls = `constructor__index`;
const catalogCls = `catalog__wrapper`;

const uiCls = `constructor__ui`;
const currItemNumCls = `constructor__ui-current-num`;
const maxItemNumCls = `constructor__ui-max-num`;
const progressTextCls = `constructor__ui-progress`;
const itemsUICls = `constructor__ui-items`;
const uiNextCls = `constructor__ui-next-btn`;

let box1info = document.querySelector(`.constructor__box--1`)
let box2info = document.querySelector(`.constructor__box--2`)

let currentStep = 1;
let currentBox = {
    aromas: {},
    souvenirs: {},
    price: 0
}

const boxTypes = {
    small: {
        souvenirs: box1info.dataset.maxsouvenirs,
        aromas: box1info.dataset.maxaromas,
        price: box1info.dataset.boxprice,
        name: box1info.dataset.boxname,
        code: box1info.dataset.boxcode,
        imgs: [box1info.dataset.boximg, box1info.dataset.boximgretina]
    },
    big: {
        souvenirs: box2info.dataset.maxsouvenirs,
        aromas: box2info.dataset.maxaromas,
        price: box2info.dataset.boxprice,
        name: box2info.dataset.boxname,
        code: box2info.dataset.boxcode,
        imgs: [box2info.dataset.boximg, box2info.dataset.boximgretina]
    },
}

let currentBoxType = boxTypes.small;

function goToStep1(){
    currentBoxType = boxTypes.small;
    currentBox = {
        aromas: {},
        souvenirs: {},
        price: 0,
    }
    currentStep = 1;
    index.classList.add(`${indexCls}--active`);
    catalog.classList.remove(`${catalogCls}--active`);
    ui.classList.remove(`${uiCls}--active`);
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

function goToCart() {
    addBoxToCart(currentBox)
    window.location.href = cartAddress
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
        let html = document.createElement(`div`)
        if (souvenirsEmpty) {
            for (let i = 0; i < currentBoxType.souvenirs; i ++) {
                html.innerHTML += drawUIItem();
            }
            itemsUI.innerHTML = html.innerHTML
        } else {
            for (const souvenir in currentBox.souvenirs) {
                if (currentBox.souvenirs.hasOwnProperty(souvenir)) {
                    html.innerHTML += drawUIItem(currentBox.souvenirs[souvenir]);
                }
            }
            if (Object.keys(currentBox.souvenirs).length < currentBoxType.souvenirs) {
                let extraEls = currentBoxType.souvenirs - Object.keys(currentBox.souvenirs).length
                for (let i = 0; i < extraEls; i++) {
                    html.innerHTML += drawUIItem();
                }
            }
        }


        itemsUI.innerHTML = html.innerHTML

        currItemNum.innerText = Object.keys(currentBox.souvenirs).length
        if (Object.keys(currentBox.souvenirs).length == currentBoxType.souvenirs) {
            progressText.classList.add(`${progressTextCls}--active`)
            nextBtn.classList.add(`${uiNextCls}--active`)
            nextBtn.addEventListener(`click`, goToStep3)

        } else {
            progressText.classList.remove(`${progressTextCls}--active`)
            nextBtn.classList.remove(`${uiNextCls}--active`)
            nextBtn.removeEventListener(`click`, goToStep3)
        }
    }

    if (currentStep == 3) {
        let html = document.createElement(`div`)
        if (aromasEmpty) {

            for (let i = 0; i < currentBoxType.aromas; i++) {
                html.innerHTML += drawUIItem();
            }
            itemsUI.innerHTML = html.innerHTML
        } else {
            for (const aroma in currentBox.aromas) {
                if (currentBox.aromas.hasOwnProperty(aroma)) {
                    html.innerHTML += drawUIItem(currentBox.aromas[aroma]);
                }
            }
            if (Object.keys(currentBox.aromas).length < currentBoxType.aromas) {
                let extraEls = currentBoxType.aromas - Object.keys(currentBox.aromas).length
                for (let i = 0; i < extraEls; i++) {
                    html.innerHTML += drawUIItem();
                }
            }
        }
        itemsUI.innerHTML = html.innerHTML
        currItemNum.innerText = Object.keys(currentBox.aromas).length
        if (Object.keys(currentBox.aromas).length == currentBoxType.aromas) {
            progressText.classList.add(`${progressTextCls}--active`)
            nextBtn.classList.add(`${uiNextCls}--active`)
            nextBtn.addEventListener(`click`, goToCart)

        } else {
            progressText.classList.remove(`${progressTextCls}--active`)
            nextBtn.classList.remove(`${uiNextCls}--active`)
            nextBtn.removeEventListener(`click`, goToCart)
        }
    }
}

function drawUIItem(obj = {}) {
    let img = '';
    let retina = '';
    let imgFull = '';
    let isObjEmpty = Object.keys(obj).length === 0 && obj.constructor === Object;
    if (!isObjEmpty) {
        img = obj.img
        retina = obj.retina + ` 2x`
        imgFull = `constructor__ui-item--full`
    }
    return `<li class="constructor__ui-item ${imgFull}">
                    <img src="${img}" srcset="${retina}" alt="order item">
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

let secondTab = document.querySelector(`.${tabCls}[data-step="2"]`)
let firstTab = document.querySelector(`.${tabCls}[data-step="1"]`)

secondTab.addEventListener(`click`, goToStep2);
firstTab.addEventListener(`click`, goToStep1);

let index = document.querySelector(`.${indexCls}`);
let catalog = document.querySelector(`.${catalogCls}`);
let ui = document.querySelector(`.${uiCls}`);

let currItemNum = document.querySelector(`.${currItemNumCls}`);
let maxItemNum = document.querySelector(`.${maxItemNumCls}`);
let progressText = document.querySelector(`.${progressTextCls}`);
let itemsUI = document.querySelector(`.${itemsUICls}`);
let nextBtn = document.querySelector(`.${uiNextCls}`);

// let blobBtnSmall = document.querySelector(`.${blobBtnSmallCls}`);
// let blobBtnBig = document.querySelector(`.${blobBtnBigCls}`);
//
// blobBtnSmall.addEventListener(`click`, function(evt){
//     evt.preventDefault();
//     currentBoxType = boxTypes.small;
//     currentBox.price = currentBoxType.price
//     currentBox.name = currentBoxType.name
// });
//
// blobBtnBig.addEventListener(`click`, function(evt){
//     evt.preventDefault();
//     currentBoxType = boxTypes.big;
//     currentBox.price = currentBoxType.price
//     currentBox.name = currentBoxType.name
// });
