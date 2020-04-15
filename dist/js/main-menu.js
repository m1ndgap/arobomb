"use strict";

const mainMenu = document.querySelector('.main-menu')
const submenuCls = 'main-menu__list-item--submenu'

let submenus = mainMenu.querySelectorAll('.' + submenuCls)
submenus.forEach(el => {
    el.addEventListener('mouseover', function(){
        this.classList.add(submenuCls + '--active')
    })
    el.addEventListener('mouseleave', function(){
        this.classList.remove(submenuCls + '--active')
    })
})
