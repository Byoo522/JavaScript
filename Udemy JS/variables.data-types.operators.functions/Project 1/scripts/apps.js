const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcualtionDescription = `${currentResult} ${operator} ${enteredNumber}`;
  outputResult(currentResult, calcualtionDescription) //from vendor.js
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult += enteredNumber; // parseInt converts test to number with no decimal. parseFloat converts to number with decimals.
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult -= enteredNumber; // parseInt converts test to number with no decimal. parseFloat converts to number with decimals.
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult *= enteredNumber; // parseInt converts test to number with no decimal. parseFloat converts to number with decimals.
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult /= enteredNumber; // parseInt converts test to number with no decimal. parseFloat converts to number with decimals.
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// currentResult = currentResult + 10;
// let calcualtionDescription = `(${defaultResult} + 10)`;
// let errorMessage = 'An error occured'; // adding a \n will add a line break on the console, but you won't see the line break
