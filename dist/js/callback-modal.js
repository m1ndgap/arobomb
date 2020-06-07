"use strict";

const cbmodalCls = `cbmodal`;
const cbBtnCls = `js-order-call-btn`;

const cbModalFormCls = `cbmodal-form__wrapper`;
const cbModalThanksCls = `cbmodal-thanks__wrapper`;

const cbmodalCloseCls = `modal__close`;
const cbModalSubmitCls = `cbmodal-form__submit-btn`;



let cbBtn = document.querySelector(`.` + cbBtnCls);
let cbModal = document.querySelector(`.` + cbmodalCls);

let cbSubmit = cbModal.querySelector(`.` + cbModalSubmitCls);
let cbClose = cbModal.querySelector(`.` + cbmodalCloseCls);
let cbcbModalForm = cbModal.querySelector(`.` + cbModalFormCls);
let cbModalThanks = cbModal.querySelector(`.` + cbModalThanksCls);

cbBtn.addEventListener(`click`, function(e){
    e.preventDefault();
    cbModal.classList.add(`modal--active`)
})

cbSubmit.addEventListener(`click`, function (e) {
    e.preventDefault();
    cbcbModalForm.classList.remove(`modal-wrapper--active`)
    cbModalThanks.classList.add(`modal-wrapper--active`)
})

cbClose.addEventListener(`click`, function(e){
    e.preventDefault();
    cbModal.classList.remove(`modal--active`)
    cbcbModalForm.classList.add(`modal-wrapper--active`)
    cbModalThanks.classList.remove(`modal-wrapper--active`)
})
