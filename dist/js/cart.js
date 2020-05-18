"use strict";

let cartTabsCls = 'cart__tab' ;
let cartTabContent = 'cart__tab-content';

const showTabContent = (tab) => {
    const contentTabs = document.querySelectorAll('.' + cartTabContent);
    let contentToShow = [...contentTabs].filter(thistab => thistab.dataset.tabcontent == tab.dataset.tab)[0]
    hideTabs();
    contentToShow.classList.add(cartTabContent + '--active')
}

const hideTabs = () => {
    const contentTabs = document.querySelectorAll('.' + cartTabContent);
    contentTabs.forEach((tab) => {
        tab.classList.remove(cartTabContent + '--active')
    })
}



let tabSwitches = document.querySelectorAll('.' + cartTabsCls);
showTabContent(tabSwitches[0])
tabSwitches.forEach((tabSwitch) => {
    tabSwitch.addEventListener('click', function(){
        showTabContent(this)
    });
})
