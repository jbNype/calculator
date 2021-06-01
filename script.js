/******************************************************************************* 
************************** The Odin Project: Calculator ************************
********************************************************************************
***********************          by Justin Bauer          **********************
***********************          GitHub: jbNype           **********************
***********************     http://justinbauer.design     **********************
********************************************************************************/

const buttons = document.querySelectorAll('.num');
const maths = document.querySelectorAll('.maths');
const reset = document.querySelector('#reset');
const displayContainer = document.querySelector('.display-container');
const display = document.querySelector('#display');

let displayValue = '';
let operatorInput;

function add(a, b) {
    return total = a + b;
}

function subtract(a, b) {
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
    });
})

reset.addEventListener('click', () => {
    displayValue = '';
    display.textContent = displayValue;
    displayContainer.appendChild(display);
})

maths.forEach((math) => {
    math.addEventListener('click', () => {
        operatorInput = math.id;
        switch (operatorInput) {
            case 'add': add(); break;
            case 'subtract': subtract(); break;
            case 'divide': divide(); break;
            case 'multiply': multiply(); break;    
        };
    });
});

console.log(operator(add, 4, 5));



// store number when user presses operator
// save which operator has been selected
// store second numer user inputs
// equals runs the operator() function 
// display solution in displayValue
