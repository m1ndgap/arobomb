"use strict";

let tabsCls = `tabs`,
    tabBtnCls = `tabs__tab-button`,
    tabTextCls = `tabs__text-wrap`,
    tabTextArea = `tabs__text-area`;

let tabs = document.querySelectorAll(`.` + tabsCls)

let resetTabs = function(tabBtn){
    let parent = tabBtn.parentElement,
    tabs = parent.querySelectorAll(`.` + tabBtnCls);
    tabs.forEach(function (tab) {
        tab.classList.remove(tabBtnCls + `--active`);
        tab.dataset.active = `false`;
    })
};

let resetText = function(tabTxt){
    let parent = tabTxt.parentElement,
        texts = parent.querySelectorAll(`.` + tabTextCls);
    texts.forEach(function (tab) {
        tab.classList.remove(tabTextCls + `--active`);
        tab.dataset.active = `false`;
    })
}

let switchText = function(tabBtn){
    let parent = tabBtn.closest(`.` + tabsCls),
        texts = parent.querySelectorAll(`.` + tabTextArea + ` .` + tabTextCls),
        textNumber = +tabBtn.dataset.tab,
        text = Array.from(texts).filter(text => text.dataset.textn == textNumber)[0];
    resetText(text);
    text.classList.add(tabTextCls + `--active`);
};

tabs.forEach(function(tab){
    let buttons = tab.querySelectorAll(`.` + tabBtnCls),
        texts = tab.querySelectorAll(`.` + tabTextCls)
    buttons.forEach(function(btn){
        btn.addEventListener('click', function(){
            if (this.dataset.active == 'false') {
                resetTabs(this)
                this.classList.add(tabBtnCls + `--active`)
                this.dataset.active = `true`;
                switchText(this)
            } else {
                console.log(`active`)
                this.classList.add(tabBtnCls + `--active`)
            }
        })
    })
})
