"use strict";

const animateHost = document.getElementById(`animate-test-host`)
const animation = animateHost.getElementById(`animate-test`)

const animateCircle = document.getElementById(`test-circle`)
const animationCircle = animateCircle.getElementById(`test-circle-to`)

animateHost.addEventListener(`mouseenter`, function () {
    animation.beginElementAt(0);
    console.log(animation.getStartTime())
    console.log(animation.getSimpleDuration())

})
animateHost.addEventListener(`mouseleave`, function () {
    animation.endElement();
    console.log(animation.getCurrentTime())
})




animateCircle.addEventListener(`mouseenter`, function () {
    animationCircle.beginElement();

})
animateCircle.addEventListener(`mouseleave`, function () {
    animationCircle.endElement();
})
