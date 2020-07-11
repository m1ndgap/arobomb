"use strict";

const animateHost = document.getElementById(`animate-test-host`)
const animation = animateHost.getElementById(`animate-test`)

const animateCircle = document.getElementById(`test-circle`)
const animationCircle = animateCircle.getElementById(`test-circle-to`)

animateHost.addEventListener(`mouseenter`, function () {
    animation.beginElement();
    console.log(123)

})
animateHost.addEventListener(`mouseleave`, function () {
    animation.endElement();
})




animateCircle.addEventListener(`mouseenter`, function () {
    animationCircle.beginElement();

})
animateCircle.addEventListener(`mouseleave`, function () {
    animationCircle.endElement();
})
