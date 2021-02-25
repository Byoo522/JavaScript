//plan of attack
//take in array of groceries and return total cost of all grocery items

// conditional logic
// sum up cost
// loop through
// return cost

// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5



let butter = 'butter';
let eggs = 'eggs';
let milk = 'milk';
let bread = 'bread';
let cheese = 'cheese';
let butterPrice = 1;
let eggsPrice = 2;
let milkPrice = 3;
let breadPrice = 4;
let cheesePrice = 5;

function costOfGroceries(groceries) {
let total = 0;
for (let i = 0; i < groceries.length; i++) {
let items = groceries[i]
  if(items === 'butter') {
  total += 1;
  } else if (items === 'eggs'){
  total += 2
  } else if (items === 'bread') {
  total += 3;
  } else if (items === 'cheese') {
  total += 4;
  } else
return total;
}

}


function mostExpensiveGroceries(groceriesList) {

}


// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

costOfGroceries(groceriesA);  // 8
costOfGroceries(groceriesB);  // 13
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");
