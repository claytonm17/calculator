// Initialize values
let initialNumber = '';
let secondNumber = '';
let currentMethod = null;

// Functions for basic math
function addition(x,y) {
    return x + y
};

function subtraction(x,y) {
    return x - y
};

function multiplication(x,y) {
    return x * y
};

function division(x,y) {
    if (y === 0) {
        return "Divide by Zero error";
    } else {
        return x/y
    }
};