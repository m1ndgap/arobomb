"use strict";

let cartTabsCls = 'cart__tab' ;
let cartTabContentCls = 'cart__tab-content';

const showTabContent = (tab) => {
    const contentTabs = document.querySelectorAll('.' + cartTabContentCls);
    let contentToShow = [...contentTabs].filter(thistab => thistab.dataset.tabcontent == tab.dataset.tab)[0]
    hideTabContent(tab);
    contentToShow.classList.add(cartTabContentCls + '--active')
    if (tab.dataset.tab == 2) {
        tab.classList.add(cartTabsCls + '--active')
    }
}

const hideTabContent = (clickTab) => {
    const contentTabs = document.querySelectorAll('.' + cartTabContentCls);
    const tabs = document.querySelectorAll('.' + cartTabsCls);
    let contentToHide = [...contentTabs].filter(thistab => thistab.dataset.tabcontent != clickTab.dataset.tab)[0]
    contentToHide.classList.remove(cartTabContentCls + '--active')
    if (clickTab.dataset.tab == 1) {
        const tabToClass = [...tabs].filter(thistab => thistab.dataset.tab == 2)[0]
        tabToClass.classList.remove(cartTabsCls + '--active')
    }
}

let tabSwitches = document.querySelectorAll('.' + cartTabsCls);
showTabContent(tabSwitches[0])

tabSwitches.forEach((tabSwitch) => {
    tabSwitch.addEventListener('click', function(){
        showTabContent(this)
    });
})


/////////////////////////////////
///////// generating products ///
/////////////////////////////////

function collectData(item){
    return {
        code: item.dataset.code,
        type: item.dataset.type,
        images: [item.dataset.img, item.dataset.retinaImg],
        price: item.dataset.price,
        name: item.dataset.name,
    }
}


function createItem(obj, code){
    let {type, images, price, name, quantity} = obj;
    let newEl = document.createElement(`div`);
    newEl.innerHTML = `<div class="cart__item" data-type="${type}" data-code="${code}" data-img="${images[0]}" data-retinaImg="${images[2]}" data-price="${price}" data-name="${name}">
                        <figure class="cart__item-img-wrap">
                            <img src="${images[0]}" alt="${name}" class="cart__item-img">
                        </figure>
                        <div class="cart__item-text">
                            <span class="cart__item-name">${name}</span>
                            <span class="cart__item-price"><span class="cart__item-price-value">${price}</span> р.</span>
                            <span class="cart__item-code">
                                Арт.
                                <span class="cart__item-code-value">${code}</span>
                            </span>
                        </div>
                        <div class="cart__item-ui">
                            <span class="cart__item-ui-text">кол.во</span>
                            <div class="cart__item-ui-wrap">
                                <button type="button" class="cart__item-btn">
                                    <svg width="28" height="8" viewBox="0 0 28 8" class="">
                                        <use xlink:href="#btn-arrow"></use>
                                    </svg>
                                </button>
                                <input type="text" class="cart__item-number" value="${quantity}">
                                <button type="button" class="cart__item-btn cart__item-btn--add">
                                    <svg width="28" height="8" viewBox="0 0 28 8" class="">
                                        <use xlink:href="#btn-arrow"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <button type="button" class="cart__item-close">
                            <svg viewBox="0 0 30 30" width="30" height="30" class="svg-circle-close">
                                <use xlink:href="#circle-close"></use>
                            </svg>
                        </button>
                    </div>`

    let close = newEl.querySelector(`.cart__item-close`)
    let item = newEl.querySelector(`.cart__item`)
    close.addEventListener(`click`, function (evt) {
        let _this = this;

        item.remove()
        removeFromCart(collectData(item));
    })
    return newEl.firstChild
}

let ls = JSON.parse(localStorage.getItem(`arobombCart`));
let cartItems = document.querySelector(`.cart__items`)
for (const property in ls) {
    if (ls.hasOwnProperty(property)) {
        console.log(createItem(ls[property], property))
        cartItems.append(createItem(ls[property], property));
    }
}
