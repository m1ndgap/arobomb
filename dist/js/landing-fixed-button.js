"use strict";

let fixBtnCls = `landingmb`;
let l1button1Id = `landing-1-button-1`
let l1button2Id = `landing-1-button-2`


function changeBtn(btnTarget){
    console.log(btnTarget)
}



let controller = new ScrollMagic.Controller();
let fixBtn = document.querySelector(`.${fixBtnCls}`);
let l1btn2 = document.querySelector(`#${l1button2Id}`);
let l1btn1 = document.querySelector(`#${l1button1Id}`);




let scene1 = new ScrollMagic.Scene({
    triggerElement: '.landing-1__title-pitch' // point of execution
})
    .addTo(controller)
    .reverse(true)
    .offset(500)
    .on(`start`, function(e){
        changeBtn(l1btn1)
    });

let scene2 = new ScrollMagic.Scene({
    triggerElement: '.landing-1__slider-section' // point of execution
})
    .addTo(controller)
    .reverse(true)
    .on(`start`, function(e){
        changeBtn(l1btn2)
    });


console.log(scene1.offset())
