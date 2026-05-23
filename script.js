const display = document.getElementById("display-box");

let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let isSecondNumberActive = false;

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
            inputNumber(value);
        }

    });
});


function setOperator(operator){

    // If we already have first + second number → calculate immediately
    if (firstNumber !== "" && secondNumber !== "") {
        calculate();
    }

    // store new operator
    currentOperator = operator;

    // switch to second number input
    isSecondNumberActive = true;
}

function inputNumber(value){

    if (isSecondNumberActive === false){

        firstNumber += value;

        display.value = firstNumber;

    } else {

        secondNumber += value;

        display.value = secondNumber;

    }

    console.log(firstNumber);
    console.log(secondNumber);

}

function appendToDisplay(value){
    display.value += value;
}

function clearAllDisplay(){
    display.value = "";

    firstNumber = "";
    secondNumber = "";
    currentOperator = "";
    isSecondNumberActive = false;

    console.log("----------------------------------------------------");

}

function clearDisplay(){
    display.value = display.value.slice(0, -1);
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

    if (b === 0){
        return "Error";
    }

    return a / b;
}

function calculate(){

    if (firstNumber === "" || secondNumber === "") return;

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    let result;

    if (currentOperator === "+"){

        result = add(num1, num2);

    } else if (currentOperator === "-"){

        result = subtract(num1, num2);

    } else if (currentOperator === "*"){

        result = multiply(num1, num2);

    } else if (currentOperator === "/"){

        result = divide(num1, num2);

    }

    else {
        result = "Error"
        console.log("Error");
    }
    console.log("result: ", result);
    console.log("firstNumber: ", firstNumber);
    console.log("secondNumber: ", secondNumber);
    console.log("currentOperator: ", currentOperator);
    console.log("isSecondNumberActive: ", isSecondNumberActive);

    display.value = result;
    firstNumber = result.toString();
    secondNumber = "";
    currentOperator = "";
    isSecondNumberActive = false;
}