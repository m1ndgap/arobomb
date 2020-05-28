"use strict";

const catMenuCls = `submenu`;
const catMenuWrapCls = `submenu__wrapper`;
const catSectionCls = `submenu__section`;
const subcatLinkCls = `submenu__subsection-item`;

const hideSections = (sections) => {
    sections.forEach((sect) => {
        sect.classList.remove(catSectionCls + `--active`)
    })
}

const hideSubcatLinks = (link) => {
    let parent = link.parentElement;
    let siblings = parent.querySelectorAll(`.` + subcatLinkCls)
    siblings.forEach((sibling) => {
        sibling.classList.remove(subcatLinkCls + `--active`)
    })
}

const sortProducts = (item) => {
    //sorting logic here
    console.log(`Sorting products...`)
}

const minimize = (submenu) => {
    submenu.classList.add(catMenuCls + `--minimized`);
}

let submenu = document.querySelector(`.` + catMenuCls);
let submenuWrap = submenu.querySelector(`.` + catMenuWrapCls);
let sections = submenu.querySelectorAll(`.` + catSectionCls)
let links = submenu.querySelectorAll(`.` + subcatLinkCls)

sections.forEach((section) => {
    section.addEventListener(`click`, function () {
        hideSections(sections)
        section.classList.add(catSectionCls + `--active`)
        sortProducts(section);
    })
    section.addEventListener(`keydown`, function (evt) {
        if (evt.key === `Enter`) {
            hideSections(sections)
            section.classList.add(catSectionCls + `--active`)
            sortProducts(section);
        }
    })
})

links.forEach((link) => {
    link.addEventListener(`click`, function () {
        hideSubcatLinks(this)
        this.classList.add(subcatLinkCls + `--active`)
        sortProducts(link);
    })
})

document.addEventListener(`scroll`, function () {
    let viewport = document.body.clientWidth;
    let offset = window.pageYOffset
    if (viewport > 1280) {
        if (offset > 250) {
            submenu.classList.add(catMenuCls + `--minified`)
        } else {
            submenu.classList.remove(catMenuCls + `--minified`)
        }
    }
})

submenuWrap.addEventListener(`mouseenter`, function () {
    let parent = this.parentElement;
    let minified = parent.classList.contains(catMenuCls + `--minified`)
    if (minified) {
        parent.classList.remove(catMenuCls + `--minified`)
    }
})
