let number1 = "";
let number2 = "";
let operator;

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
backspaceButton.addEventListener("click", backspace);

const operators = document.querySelectorAll(".operator");

function storeNumber(number) {
    if (!operator && number1.length <= 8) {
        number1 = number1.concat(number);
    }

    changeDisplay(number1);
}

function storeOperator() {

}

function changeDisplay(number) {
    const screenText = document.querySelector(".screen-text");
    screenText.innerHTML = Number(number).toLocaleString();
}

function resetCalculator() {
    number1 = "";
    number2 = "";
    operator;
    changeDisplay(0);
}

function backspace() {
    
}

