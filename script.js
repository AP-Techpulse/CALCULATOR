const display = document.getElementById("display-box");

function appendToDisplay(button){
    display.value += button;
}

function clearAllDisplay(){
    display.value = "";

    firstNumber = display.value;
    secondNumber = "";
    currentOperator = "";
    isSecondNumberActive = false;
    }

function clearDisplay(){
    display.value = display.value.slice(0, -1);
}

let buttons  = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {

        const value = e.target.textContent;

        if (value === "AC") {
            clearAllDisplay();
        } 
        else if (value === "=") {
            calculate();
        }
        else if (value === "⌫") {
            clearDisplay();
        } 
        else if (["+", "-", "*", "/"].includes(value)) {
            setOperator(value);
        } 
        else {
            // If it isn't an operator or special key, it must be a number or a decimal!
            inputNumber(value);
        }

    });
});

let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let isSecondNumberActive = false;

function inputNumber(value) {

    if (!isSecondNumberActive) {

        firstNumber += value;
        display.value = firstNumber;

    } else {

        secondNumber += value;
        display.value = secondNumber;

    }

}

function setOperator(operator) {

    if (firstNumber === "") return;

    currentOperator = operator;
    isSecondNumberActive = true;

}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function calculate(){
    if (currentOperator === "+"){
        display.value = add(parseFloat(firstNumber), parseFloat(secondNumber));
    } else if (currentOperator === "-"){
        display.value = subtract(parseFloat(firstNumber), parseFloat(secondNumber));
    } else if (currentOperator === "*"){
        display.value = multiply(parseFloat(firstNumber), parseFloat(secondNumber));
    } else if (currentOperator === "/"){
        display.value = divide(parseFloat(firstNumber), parseFloat(secondNumber));
    }
}