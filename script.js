// Initialize values
let currentInput = '';
let previousInputs = [];
let currentOperator = '';

// Event listeners
const addition = document.querySelector('#addition');
addition.addEventListener('click', () => {
  operatorClick('+');
});
const subtraction = document.querySelector('#subtraction');
subtraction.addEventListener('click', () => {
  operatorClick('-');
});
const multiplication = document.querySelector('#multiplication');
multiplication.addEventListener('click', () => {
  operatorClick('*');
});
const division = document.querySelector('#division');
division.addEventListener('click', () => {
  operatorClick('/');
});
const one = document.querySelector('#one');
one.addEventListener('click', () => {
  numberClick(1);
});
const two = document.querySelector('#two');
two.addEventListener('click', () => {
  numberClick(2);
});
const three = document.querySelector('#three');
three.addEventListener('click', () => {
    numberClick(3);
});
const four = document.querySelector('#four');
four.addEventListener('click', () => {
  numberClick(4);
});
const five = document.querySelector('#five');
five.addEventListener('click', () => {
  numberClick(5);
});
const six = document.querySelector('#six');
six.addEventListener('click', () => {
    numberClick(6);
});
const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
  numberClick(7);
});
const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
  numberClick(8);
});
const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    numberClick(9);
});
const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    numberClick(0);
});
const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => {
    console.log('decimal');  // Add in functionality
});
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    clearScreen();
});
const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    console.log('equal')
    calculate();
});

// Create the display
const screen = document.querySelector('.screen');
const display = document.createElement('div');

// Functions
function updateDisplay() {
    console.log('Display updated')
    display.classList.add('content');
    display.textContent = previousInputs;
    screen.appendChild(display);
};
function numberClick(number) {
    // Append number clicked into currentInput
    currentInput = number;
    updateDisplay();
};
function operatorClick(operator) {
    // Store operator as currentOperator
    currentOperator = operator;
    // Add both to previous inputs
    previousInputs.push(currentInput, currentOperator);
    // Reset currentInput
    currentInput = '';
    updateDisplay();
    console.log(currentOperator);
};
function calculate() {
    // Append most recent input
    previousInputs.push(currentInput);
    console.log(previousInputs);

    let result = previousInputs[0];
    // Loop to determine the evaluation
    for (let i = 1; i < previousInputs.length; i++) {
        const step = previousInputs[i];

        if (typeof step === 'number') {
            if (currentOperator === '+') {
                result += step;
            } else if (currentOperator === '-') {
                result -= step;
            } else if (currentOperator === '*') {
                result *= step;
            } else if (currentOperator === '/') {
                result /= step;
            }
        } else if (step === '+' || step === '-' || step === '*' || step === '/') {
            currentOperator = step;
        }
    }
    console.log(result)
    updateDisplay();
};
function clearScreen() {
    currentInput = '';
    previousInputs = [];
    currentOperator = '';
    updateDisplay();
};