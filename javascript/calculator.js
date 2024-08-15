let currentInput = '';
let operation = '';
let previousInput = '';


function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}


function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}


function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    currentInput = result.toString(); 
    previousInput = '';
    updateDisplay();
}


function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = currentInput || '0';
}


function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = '';
    updateDisplay();
}
function resetDisplay() {
    currentInput = '0'; 
    updateDisplay(); 
}


document.querySelector('.btn-clear').addEventListener('click', clearDisplay);
