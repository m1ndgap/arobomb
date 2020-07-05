"use strict";

let fixBtnCls = `landingmb`

let controller = new ScrollMagic.Controller();
let fixBtn = document.querySelector(`.${fixBtnCls}`)
debugger

let scene = new ScrollMagic.Scene({
    triggerElement: '.landing-1__slider-section' // point of execution
})
    .addTo(controller)
    .reverse(true)
    .on(`enter`, function(e){
        fixBtn.classList.add(`${fixBtnCls}--red`)
        console.log(`im red lol xd`)
    });
