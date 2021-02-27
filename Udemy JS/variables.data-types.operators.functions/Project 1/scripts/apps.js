const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcualtionDescription = `${currentResult} ${operator} ${enteredNumber}`;
  outputResult(currentResult, calcualtionDescription) //from vendor.js
}

function add() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult += enteredNumber; // parseInt converts test to number with no decimal. parseFloat converts to number with decimals.
  outputResult('+', initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult -= enteredNumber; // parseInt converts test to number with no decimal. parseFloat converts to number with decimals.
  outputResult('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult *= enteredNumber; // parseInt converts test to number with no decimal. parseFloat converts to number with decimals.
  outputResult('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult /= enteredNumber; // parseInt converts test to number with no decimal. parseFloat converts to number with decimals.
  outputResult('/', initialResult, enteredNumber);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// currentResult = currentResult + 10;
// let calcualtionDescription = `(${defaultResult} + 10)`;
// let errorMessage = 'An error occured'; // adding a \n will add a line break on the console, but you won't see the line break
