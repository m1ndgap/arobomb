"use strict";

const btnCls = `landing-lottery__btn`;
const textCls = `js-clipboard-text`;

let clipboardBtn = document.querySelector(`.${btnCls}`)
let clipboardTextBlock = document.querySelector(`.${textCls}`)

clipboardBtn.addEventListener(`click`, function (){
    let text = clipboardTextBlock.innerText
    navigator.clipboard.writeText(text).then(function(){}, function(){});
})
