"use strict";

const calculatorBlockCls = `pcalculator`;
const currentValueCls = `pcalculator__current-value`;
const partnersId = `pcalc-partners`;
const investId = `pcalc-invest`;
const moSalesId = `pcalc-mosales`;
const profitId = `pcalc-profit`;

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// каждые 100к = 20 партнеров
// партнеры  * 4к = вложения
// продажи = партнеры * 25?
// прибыль продажи * 60рублей?

function updateCalculations(valueStr, obj) {
    let {partnersEl, investEl, moSalesEl, profitEl} = obj
    let value = +valueStr.replace(',', '')
    let partners = value / 100000 * 20
    let investment = partners * 4000
    let sales = partners * 25
    let profit = sales * 60
    partnersEl.innerText = partners;
    investEl.innerText = `${numberWithCommas(investment)} р.`
    moSalesEl.innerText = sales;
    profitEl.innerText = `${numberWithCommas(profit)} р.`
}


let currentValue = document.querySelector(`.${currentValueCls}`);
let updateObj = {
    partnersEl: document.querySelector(`#${partnersId}`),
    investEl: document.querySelector(`#${investId}`),
    moSalesEl: document.querySelector(`#${moSalesId}`),
    profitEl: document.querySelector(`#${profitId}`),
}

var calcSlider = new rSlider({
    target: '#calculator-range',
    values: [`100,000`, `150,000`, `200,000`, `250,000`, `300,000`, `350,000`, `400,000`, `450,000`, `500,000`],
    range: false,
    tooltip: false,
    scale: false,
    labels: true,
    set: [`200,000`],
    onChange: function(vals) {
        currentValue.innerText = vals
        updateCalculations(vals, updateObj)
    }
});

// calcSlider.addEventListener('change', function (evt) {
//     console.log(1231)
// })

