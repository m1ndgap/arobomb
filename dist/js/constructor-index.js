"use strict";

let constructorBlobs = document.querySelectorAll(`.constructor-blob-svg`);

constructorBlobs.forEach(function (blob) {
    let parent = blob.parentElement;
    let animate = blob.querySelector(`animate`)
    parent.addEventListener(`mouseenter`, function(){
        if (blob.animationsPaused()) {
            console.log(123123)
            blob.unpauseAnimations();
        } else {
            console.log(333333)
            animate.beginElement();
        }
    })

    parent.addEventListener(`mouseleave`, function(){
        blob.pauseAnimations();
    })
})
