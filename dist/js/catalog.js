"use strict";

let addToCartLinkCls = `catalog__item-link`;
let itemCls = `catalog__item`;

function collectDataCatalog(item){
    return {
        code: item.dataset.code,
        type: item.dataset.type,
        images: [item.dataset.img, item.dataset.retinaImg],
        price: item.dataset.price,
        name: item.dataset.name,
    }
}


let addToCartLinks = document.querySelectorAll(`.${addToCartLinkCls}`)

addToCartLinks.forEach(function(el){
    el.addEventListener(`click`, function(evt){
        evt.preventDefault();
        let item = el.closest(`.${itemCls}`);
        addToCart(collectDataCatalog(item))
    })
})
