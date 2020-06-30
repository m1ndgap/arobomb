"use strict";

console.log(localStorage)

function addToCart(obj){
    let {code, type, images, price, name} = obj;

    let ls = localStorage.getItem(`arobombCart`)
    if (!ls) {
        let newLs = {
            [code]: {type, images, price, name, quantity: 1},
        }
        localStorage.setItem(`arobombCart`, JSON.stringify(newLs))
        refreshCartBadge();
    } else {
        ls = JSON.parse(ls);
        if (ls[code]) {
            ls[code].quantity += 1;
            localStorage.setItem(`arobombCart`, JSON.stringify(ls))
            refreshCartBadge();
        } else {
            ls[code] = {type, images, price, name, quantity: 1};
            localStorage.setItem(`arobombCart`, JSON.stringify(ls))
            refreshCartBadge();
        }
    }
}

