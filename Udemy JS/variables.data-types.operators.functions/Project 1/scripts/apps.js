const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult = currentResult + parseInt(userInput.value); // parseInt converts test to number with no decimal. parseFloat converts to number with decimals.
  outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);

// currentResult = currentResult + 10;
// let calcualtionDescription = `(${defaultResult} + 10)`;
// let errorMessage = 'An error occured'; // adding a \n will add a line break on the console, but you won't see the line break
