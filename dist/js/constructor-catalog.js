"use strict";

const itemCls = `catalog__item`;
const addLinkCls = `catalog__item-link`;
const subMenuCls = `constructor__tab-submenu-item`;


const addLinkText = [`выбрать +`, `убрать –`]

function addThis(item){
    let id = item.dataset.code
    let img = item.dataset.img
    let retina = item.dataset.retinaimg
    let type = item.dataset.type
    let name = item.dataset.name
    currentBox[type][id] = {
        id: id,
        img: img,
        retina: retina,
        name: name,
    }
}

function removeThis(item){
    let id = item.dataset.code
    let type = item.dataset.type
    delete currentBox[type][id]
}

function filter(){
    items.forEach(function (item) {
        item.classList.remove(`${itemCls}--active`)
    });
    if (currentStep == 2) {
        items.forEach(function (item) {
            let itemType = item.dataset.type
            if (itemType == `souvenirs`) {
                let timeout = window.setTimeout(function () {
                    item.classList.add(`${itemCls}--active`);
                }, 50)
            }
        })
    } else if(currentStep == 3){
        items.forEach(function (item) {
            let itemType = item.dataset.type
            if (itemType == `aromas`) {
                let timeout = window.setTimeout(function () {
                    item.classList.add(`${itemCls}--active`);
                }, 50)
            }
        })
    }
}


let items = document.querySelectorAll(`.${itemCls}`)
let submenuBtns = document.querySelectorAll(`.${subMenuCls}`)

items.forEach(function(item){
    item.addEventListener(`click`, function(evt){
        evt.preventDefault();
        let addBtn = item.querySelector(`.${addLinkCls}`);
        let type = item.dataset.type
        let isSelected = item.classList.contains(`${itemCls}--selected`)
        let isObjNotFull = Object.keys(currentBox[type]).length < currentBoxType[type]
        if (isObjNotFull && !isSelected){
            addThis(item)
            updateUI()
            if (item.classList.contains(`${itemCls}--selected`)) {
                addBtn.innerText = addLinkText[0]
            } else {
                addBtn.innerText = addLinkText[1]
            }
            item.classList.toggle(`${itemCls}--selected`);
        } else if(isSelected) {
            addBtn.innerText = addLinkText[0]
            item.classList.remove(`${itemCls}--selected`);
            removeThis(item)
            updateUI()
        }
    })
})

submenuBtns.forEach(function(item){
    item.addEventListener(`click`, function(){
        let subType = item.dataset.subtype
        submenuBtns.forEach(function (sbmbtn) {
            sbmbtn.classList.remove(`${subMenuCls}--active`)
        })
        item.classList.add(`${subMenuCls}--active`)
        items.forEach(function (item) {
            let itemType = item.dataset.subtype
            item.classList.remove(`${itemCls}--active`)
            if (itemType == subType) {
                let timeout = window.setTimeout(function () {
                    item.classList.add(`${itemCls}--active`);
                }, 50)
            }
        })
    })

})

