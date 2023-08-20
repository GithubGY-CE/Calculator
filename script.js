let number1 = "";
let number2 = "";
let total = "";
let operator;
let isTotalDisplayed = false;

window.onload = resetCalculator;


const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(selectedBtn =>
    selectedBtn.addEventListener("click", event => {
        const number = event.target.innerHTML;
        storeNumber(number);
    }));

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", resetCalculator);

const backspaceButton = document.querySelector("#backspace");
backspaceButton.addEventListener("click", () => {
    if (!isTotalDisplayed) {
        storeNumber("backspace")
    }});

const operators = document.querySelectorAll(".operator");
operators.forEach(selectedBtn =>
    selectedBtn.addEventListener("click", event => {
        operator = event.target.innerHTML;
        toggleOperationButton();
        doOperation();
    }));

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => doOperation("equals"))

function storeNumber(selectedNumber) {
    removeSelectedOperator();
    
    if (!operator && number1.length <= 8) {
        number1 = editNumber(selectedNumber, number1);
        total = number1;  
        isTotalDisplayed = false;
        changeDisplay();
    } else if (number2.length <= 8 && number1 && operator) {
        number2 = editNumber(selectedNumber, number2);
        total = number2;
        changeDisplay();
        isTotalDisplayed = false;
    }
}

function editNumber(newNumber, number) {

    if (newNumber === "backspace") {
        return number.slice(0,-1);

    } else if (newNumber === ".") {
       return number.includes(".") ? number : number.concat(".");

    } else if (newNumber === "%") {
        return number / 100;

    } else if (newNumber === "+/-") {
        return number * -1;

    } else {
        return number.concat(newNumber);
    }
}

function changeDisplay() {
    const screenText = document.querySelector(".screen-text");

    if (total.toString().length > 9) {
        total = total.toExponential(3);
    } else if (total.toString().includes(".")) {
        //do nothing
    } else {
        total = Number(total).toLocaleString();
    }
    
    

    screenText.innerHTML = total;
}

function doOperation(operation) {
    if (number1 && number2) {
        number1 = Number(number1);
        number2 = Number(number2);

        switch (operator) {
            case "+": 
                number1 += number2;
                break;
            case "-":
                number1 -= number2;
                break;
            case "x":
                number1 *= number2;
                break;
            case "÷":
                number1 /= number2;
                break;
        }

        total = number1;
        number2 = "";
        isTotalDisplayed = true;
        changeDisplay();

        if (operation === "equals") {
            operator = "";
        }
    }
}

//clear operator when using equal sign!!!!!

function toggleOperationButton() {
    removeSelectedOperator();
    let operation;
    switch (operator) {
        case "+":
            operation = "add";
            break;
        case "-":
            operation = "subtract";
            break;
        case "x":
            operation = "multiply";
            break;
        case "÷":
            operation = "divide";
            break;
    }

    const operatorButton = document.querySelector("#" + operation);
    operatorButton.setAttribute("class", "selected-operator");
}

function removeSelectedOperator() {
    operators.forEach(operator => {
        operator.setAttribute("class", "operator")
    });
}

function resetCalculator() {
    number1 = "";
    number2 = "";
    operator = "";
    total = 0;
    changeDisplay();
    removeSelectedOperator();
}


