function clearDisplay() {
    document.calc.display.value = "";
}

function deleteLast() {
    let currentDisplay = document.calc.display.value;
    document.calc.display.value = currentDisplay.slice(0, -1);
}

function appendToDisplay(value) {
    document.calc.display.value += value;
}

function calculateResult() {
    try {
        let result = eval(document.calc.display.value);
        document.calc.display.value = result;
    } catch (error) {
        document.calc.display.value = "Error";
    }
}
