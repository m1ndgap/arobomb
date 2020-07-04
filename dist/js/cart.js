"use strict";

let cartTabsCls = 'cart__tab' ;
let cartTabContentCls = 'cart__tab-content';
let proceedBtnCls = `cart__total-price-proceed-btn`;
let emptyCartCls = `cart__cart-empty`;
let totalPrice1Cls = `cart__total-price-number`;
let totalPrice2Cls = `cart-form__price-amount-number`;

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
let proceedBtn = document.querySelector(`.${proceedBtnCls}`)
let emptyCartWarning = document.querySelector(`.${emptyCartCls}`)
let totalPrice1 = document.querySelector(`.${totalPrice1Cls}`)
let totalPrice2 = document.querySelector(`.${totalPrice2Cls}`)
showTabContent(tabSwitches[0])

tabSwitches.forEach((tabSwitch) => {
    tabSwitch.addEventListener('click', function(){
        showTabContent(this)
    });
})

proceedBtn.addEventListener(`click`, function (evt) {
    showTabContent(tabSwitches[1])
})


/////////////////////////////////
///////// generating products ///
/////////////////////////////////

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function removeSpaces(x) {
    return x.toString().replace(/\s/g, '');
}

function collectData(item){
    return {
        code: item.dataset.code,
        type: item.dataset.type,
        images: [item.dataset.img, item.dataset.retinaImg],
        price: item.dataset.price,
        name: item.dataset.name,
    }
}

function updateTotalPrice(int) {
    let OldTotal = parseInt(removeSpaces(totalPrice1.innerText))
    let newTotal = OldTotal + parseInt(int)
    totalPrice2.innerText = numberWithSpaces(newTotal);
    totalPrice1.innerText = numberWithSpaces(newTotal);
}

function countPrice(){
    let totalPrice = 0;
    let items = document.querySelectorAll(`.cart__item`);
    items.forEach(function(el){
        let price = parseInt(el.dataset.price);
        let value = parseInt(el.querySelector('input').value);
        totalPrice += price * value;
    })
    totalPrice2.innerText = numberWithSpaces(totalPrice);
    totalPrice1.innerText = numberWithSpaces(totalPrice);
}



function createItem(obj, code){
    let {type, images, price, name, quantity} = obj;
    let totalPrice = parseInt(price) * quantity;
    console.log(totalPrice)
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
                                <button type="button" class="cart__item-btn cart__item-btn--remove">
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
    let input = newEl.querySelector(`.cart__item-number`)
    let initValue = parseInt(input.value);
    let add = newEl.querySelector(`.cart__item-btn--add`)
    let remove = newEl.querySelector(`.cart__item-btn--remove`)
    let item = newEl.querySelector(`.cart__item`)

    if (input.value >= 9999) {
        add.classList.add(`cart__item-btn--disabled`);
    } else if (input.value == 1) {
        remove.classList.add(`cart__item-btn--disabled`);
    }

    close.addEventListener(`click`, function (evt) {
        let _this = this;
        item.remove()
        removeFromCart(collectData(item));
        refreshCartBadge();
        if (isCartEmpty()) {
            disablePayment();
        }
        countPrice();
    })

    input.addEventListener(`change`, function (evt) {
        let value = parseInt(evt.target.value);
        if (value >= 9999) {
            value = 9999;
            add.classList.add(`cart__item-btn--disabled`);
        } else if (value <= 1) {
            value = 1;
            remove.classList.add(`cart__item-btn--disabled`);
            add.classList.remove(`cart__item-btn--disabled`);
        } else {
            add.classList.remove(`cart__item-btn--disabled`)
            remove.classList.remove(`cart__item-btn--disabled`);
        }
        evt.target.value = value
        countPrice();
        // if (initValue > value) {
        //     updateTotalPrice(-(initValue-value)*parseInt(price))
        // } else if (initValue < value) {
        //     updateTotalPrice((value-initValue)*parseInt(price))
        // }
        initValue = value;
        setCartQty(collectData(item), value)
        console.log(initValue)
    })

    add.addEventListener(`click`, function(evt){
        remove.classList.remove(`cart__item-btn--disabled`);
        let oldValue = parseInt(input.value)
        input.value = parseInt(oldValue + 1)
        if (input.value >= 9999) {
            input.value = 9999;
            add.classList.add(`cart__item-btn--disabled`);
        }
        countPrice();
        updateQty(collectData(item), true)
    })

    remove.addEventListener(`click`, function(evt){
        add.classList.remove(`cart__item-btn--disabled`);
        let oldValue = parseInt(input.value)
        input.value = parseInt(oldValue - 1)
        if (input.value <= 1) {
            input.value = 1;
            remove.classList.add(`cart__item-btn--disabled`);
        }
        countPrice();
        updateQty(collectData(item), false)
    })

    return newEl.firstChild
}

let ls = JSON.parse(localStorage.getItem(`arobombCart`));
let cartItems = document.querySelector(`.cart__items`)
if (ls) {
    for (const property in ls) {
        if (ls.hasOwnProperty(property)) {
            cartItems.append(createItem(ls[property], property));
        }
    }
    enablePayment();
    countPrice();
}

//////////////////////////////////
///// enable/disable payment /////
//////////////////////////////////


function isCartEmpty(){
    return !Boolean(document.querySelector(`.cart__item`));
}

function disablePayment(){
    tabSwitches[1].classList.add(`${cartTabsCls}--disabled`);
    proceedBtn.classList.add(`btn--disabled`);
    emptyCartWarning.classList.add(`${emptyCartCls}--active`);
}

function enablePayment(){
    tabSwitches[1].classList.remove(`${cartTabsCls}--disabled`);
    proceedBtn.classList.remove(`btn--disabled`);
    emptyCartWarning.classList.remove(`${emptyCartCls}--active`);
}


function arrayReplace(array, elemToReplace, substitutionElem) {
    //  write code here.
    for (let i = 0; i < array.length; i++) {

        if (array[i] == elemToReplace) {
            array[i] = substitutionElem;
        }
    }
    return array;
}

const array = [1,2,1];
console.log(arrayReplace(array, 1, 3));
