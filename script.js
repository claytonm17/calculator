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
    numberClick('.');
});
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    clearInput();
    updateDisplay();
});
const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    console.log('equal')
    calculate();
});

// Create the display
const screen = document.querySelector('.screen');
const display = document.createElement('div');
let fullExpression = '' // Creating adjacent expression for display

// Functions
function updateDisplay(output) {
    display.classList.add('content');
    display.textContent = output;
    screen.appendChild(display);
};
function numberClick(number) {
    // Ignore duplicate decimals
    if (number === '.' && currentInput.toString().includes('.')) {
        return;
    }
    currentInput += number;
    fullExpression += number;
    updateDisplay(fullExpression);
};
function operatorClick(operator) {
    // Store operator as currentOperator
    currentOperator = operator;
    // Add both to previous inputs
    previousInputs.push(currentInput, currentOperator);
    // Reset currentInput
    currentInput = '';
    fullExpression += `${operator}`;
    updateDisplay(fullExpression);
    console.log(currentOperator);
};
function calculate() {
    // Append most recent input
    if (currentInput !== '') {
        previousInputs.push(parseFloat(currentInput));
        currentInput = '';
    }

    console.log(previousInputs);

    let result = previousInputs[0];
    // Loop to determine the evaluation
    for (let i = 1; i < previousInputs.length; i++) {
        const step = previousInputs[i];

        if (typeof step === 'number') {
            if (currentOperator === '+') {
                result = parseFloat(result) + step;
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
    updateDisplay(result);
};
function clearInput() {
    currentInput = '';
    previousInputs = [];
    currentOperator = '';
    fullExpression = '';
    updateDisplay(fullExpression);
};