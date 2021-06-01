/******************************************************************************* 
************************** The Odin Project: Calculator ************************
********************************************************************************
***********************          by Justin Bauer          **********************
***********************          GitHub: jbNype           **********************
***********************     http://justinbauer.design     **********************
********************************************************************************/
const buttons = document.querySelectorAll('.num');
const displayContainer = document.querySelector('.display-container');
const display = document.querySelector('#display');
let displayValue = '';


function add(a, b) {
    return total = a + b;
}

function substract(a, b) {
    return total = a - b;
}  

function divide(a, b) {
    return total = a / b;
}

function multiply(a, b) {
    return total = a * b;
}

function operator(operator, a, b){
    return total = operator(a,b);
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        displayValue += button.id;
        display.textContent = displayValue;
        displayContainer.appendChild(display);
    })
})

