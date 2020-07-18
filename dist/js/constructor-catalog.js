"use strict";

const itemCls = `catalog__item`;
const addLinkCls = `catalog__item-link`;

const addLinkText = [`выбрать +`, `убрать –`]

let items = document.querySelectorAll(`.${itemCls}`)

items.forEach(function(item){
    item.addEventListener(`click`, function(evt){
        evt.preventDefault();
        let addBtn = item.querySelector(`.${addLinkCls}`);
        if (item.classList.contains(`${itemCls}--selected`)) {
            addBtn.innerText = addLinkText[0]
        } else {
            addBtn.innerText = addLinkText[1]
        }
        item.classList.toggle(`${itemCls}--selected`);
    })
})
