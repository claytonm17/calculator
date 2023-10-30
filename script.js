// Initialize values
let currentInput = '';
let previousInputs = [];
let currentOperator = '';

// Add in event listeners

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
};

// Testing for functionality
let testInput = prompt("Enter a number");
numberClick(testInput)
operatorClick('multiply')