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
showTabContent(tabSwitches[1])

tabSwitches.forEach((tabSwitch) => {
    tabSwitch.addEventListener('click', function(){
        showTabContent(this)
    });
})
