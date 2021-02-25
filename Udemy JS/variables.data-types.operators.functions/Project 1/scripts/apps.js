const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  const sumResult = num1 + num2;
  return sumResult;
}

add(1, 2);
add(5, 5);
add(7, 7);

currentResult = currentResult + 10;

let calcualtionDescription = `(${defaultResult} + 10)`;
let errorMessage = 'An error occured'; // adding a \n will add a line break on the console, but you won't see the line break


outputResult(currentResult, calcualtionDescription);
