"use strict";

const docLinkCls = 'documents__item-link',
    docModalId = 'document-modal',
    docModalCls = 'document-modal',
    docItemTitleCls = 'documents__item-title',
    docModalTitleCls = 'document-modal__name',
    docModalImgCls = 'document-modal__image',
    docModalBtnCls = 'document-modal__close';

let fetchDocModal = () => {
    let template = document.querySelector('#' + docModalId).content.cloneNode(true);
    document.querySelector('body').appendChild(template)
    let modal = document.querySelector('.' + docModalCls)
    let closeBtn = modal.querySelector('.' + docModalBtnCls);
    closeBtn.addEventListener('click', function(){
        modal.classList.remove(docModalCls + '--active')
    })
    clearFetchlisteners(docLinks, fetchDocModal)
};

let clearFetchlisteners = (links, fn) => {
    links.forEach((link) => {
        link.removeEventListener('click', fn);
    })
}

let showModal = (name, src) => {
    let modal = document.querySelector('.' + docModalCls);
    modal.querySelector('.' + docModalTitleCls).innerText = name;
    modal.querySelector('.' + docModalImgCls).src = src;
    modal.classList.add(docModalCls + '--active')
}

let docLinks = document.querySelectorAll('.' + docLinkCls)
docLinks.forEach((link) => {
    link.addEventListener('click', fetchDocModal);
    link.addEventListener('click', (evt) => {
        let link = evt.target;
        let name = link.parentElement.querySelector('.' + docItemTitleCls).innerText;
        let src = link.dataset.src;
        showModal(name, src);
    })
})
