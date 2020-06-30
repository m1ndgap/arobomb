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


let currentValue = document.querySelector(`.${currentValueCls}`);
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
    }
});

console.log(calcSlider)
calcSlider.getValue()
calcSlider.onChange(function (values) {
    console.log(123);
});


// calcSlider.addEventListener('change', function (evt) {
//     console.log(1231)
// })

