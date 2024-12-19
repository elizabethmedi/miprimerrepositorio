// JavaScript source code

// FUNCI�N PARA AGREGAR N�MEROS Y OPERADORES AL DISPLAYlet currentInput = '';
let previousInput = '';
let operation = '';

function appendToResult(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function clearResult() {
    currentInput = '';
    previousInput = '';
    operation = '';
    document.getElementById('result').value = '';
}

function setOperation(op) {
    if (currentInput === '') return; // No hacer nada si no hay entrada
    if (previousInput !== '') {
        calculateResult(); // Calcular si ya hay una operaci�n anterior
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return; // Verificar si los valores son v�lidos

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return; // Si no hay operaci�n, no hacer nada
    }