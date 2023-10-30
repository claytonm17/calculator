// Initialize values
let currentInput = '';
let previousInputs = [];
let currentOperator = '';

// Add in event listeners
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

// Functions
function updateDisplay() {
    console.log(currentInput);
    console.log(previousInputs);
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
    previousInputs.push(currentOperator, currentInput);
    // Reset currentInput
    currentInput = '';
    updateDisplay();
    console.log(previousInputs)
};

function calculate() {
    // Append most recent input
    previousInputs.push(currentInput);
    
    updateDisplay();
}