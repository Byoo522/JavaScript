const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcualtionDescription = `${currentResult} ${operator} ${enteredNumber}`;
  outputResult(currentResult, calcualtionDescription)
}

function add() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber; // parseInt converts test to number with no decimal. parseFloat converts to number with decimals.
  outputResult('+', initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber; // parseInt converts test to number with no decimal. parseFloat converts to number with decimals.
  outputResult('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber; // parseInt converts test to number with no decimal. parseFloat converts to number with decimals.
  outputResult('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber; // parseInt converts test to number with no decimal. parseFloat converts to number with decimals.
  outputResult('/', initialResult, enteredNumber);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// currentResult = currentResult + 10;
// let calcualtionDescription = `(${defaultResult} + 10)`;
// let errorMessage = 'An error occured'; // adding a \n will add a line break on the console, but you won't see the line break
