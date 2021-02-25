// Given an expression that utilizes operator precedence, compute its value

console.log(1 + 5 * 2 === 11 % 1000) //true
console.log(1 + 12 + 3 * 10 <= 44) //true

// Given an expression, use the grouping operator to change it’s evaluation

console.log(((1 + 5) * 2) === (11 & 1000)) //false
console.log(1 + (12 + 3) * 10 <= 44) //false

//Given expressions using == and ===, compute their values
console.log('example 2');
console.log(1 === 1); //true
console.log(1 == 1); //true
console.log(1 == '1'); //true
console.log(1 === 2); //false
console.log(1 == 2); //false
console.log(1 == '2'); //false

// Given a code snippet using postfix ++, postfix --, +=, -=, /=, *=, predict the value of labeled lines

for(let i = 0; i < 3; i++){
    console.log(i)
}

for(let i = 3; i > 0; i--){
    console.log(i)
}

for(let i = 8; i > 1; i /= 2){
    console.log(i)
}

for(let i = 1; i < 8; i *= 2){
    console.log(i)
}

let num = 10;
num *= 10;
num /= 10;
num++;
num--;
num -= 5;
console.log(num)
​
// Create and assign a variable using let to a string, integer, and a boolean. Read its value and print to the console.

// let str = 'Once upon a time'
// let str2 = 'there was a programmer'
// let str3 = 'who needed to add two nums together'
// let num1 = 1178
// let num2 = 23
// let str4 = 'this programmer added them together and got a new numer'
// let bool = 1202 === (num1 + num2);
// console.log(bool)


// Craft a clear, concise coding question to a more experienced developer


// Research unknown JavaScript code syntax using MDN
// find the smallest number in an array;
// turn this number into a string!
// let num = 42;

// now concat that number which is now a string. With another string!
// let anotherString = 'The meaning to life, the universe, and everything is';

// now console.log the result concatenating those two strings together
// what do you get?


// Manage your time and stress at AppAcademy
// take breaks.
// talk to other students.
// BREATHE
// ask for more suggestions from stoods.

// STRINGS:
// Describe the properties of a string
// let str1 = 'Hey, '
// ley str2 = "Miah!"
// how can we find the length of a string?
// mutable or immutable?
// how do we index into it?

// how can we find a specific character?
// maybe string.indexOf()
// checkout MDN
// how do we combine (concatenate), two strings together?
// console.log(??)
// Find the first character inside str2
// console.log(??)
// make a new SUBSTRING, (a portion of a full string), from this string.
// let fullString = 'So yesterday miah tried to tell me to code on the weekend. ew.'
// how can we get the substring, 'code on the weekend', how do we save that to a new variable?


// FUNCTIONS:
// how do we define a function??

// let's define a function that calculates the average of two numbers!

// identify the difference to parameters vs arguments!


// CONTROL FLOW:
// Define a function that accepts a sentence string and two words as args.
// The function should return a boolean indicating if the sentence includes either word.

// Identify a pair of mutually exclusive conditions
// let miahIsCool = true;
// if(miahIsCool){
//     console.log('Oh wow! This is true!')
// } else {
//     console.log('Miah is really not that cool!')
// }

// turn the following for loop into a while loop!
// the for loop and while should console.log the same amount of times!
// for(let i = 0; i < 3; i++){
//     console.log('I love cats and dogs!')
// }

// Write a function that iterates through a provided string argument

// solve pigLatin() function!


// Write a function that takes in an array of words and a string as arguments
// and returns a boolean indicating whether the string is located inside of the array.
// The function must use Array#indexOf.

// ARRAYS:
// properties
// mutable or immutable?
// how do we get the length of an array?
// how do we index into an array?

// Define that an array literal is an ordered list of values defined by
// using bracket and individual values are read by indexing.


// INTERMEDIATE FUNCTIONS:
// Identify that strings are immutable and arrays are mutable

// let array = ['Hello', '2', 1, 16, 'goodbye']

// for(let i = 0; i < array.length; i++){
//     // array.push('hey girl');
//     // array.shift()
// }

// console.log(array)

// Define a function using both function declaration and function expression syntax
// function consoleLogSomething(something){
//     console.log(something)
// }

// let consoleLogSomethingElse = function(somethingElse){
//     console.log(somethingElse)
// }

// Utilize Array#push, #pop, #shift, #unshift to mutate an array
// let array = ['Hey, ', 'Programmer!', 'How', 'are', 'you?']
// array.pop();
// array.push('words are cool');
// array.unshift('Where are my car keys??');
// array.shift();
// console.log(array);

// List the arguments Array.splice() can take!
// HINT: Checkout MDN, write them down here.

// Write a function that sums up elements of an array, given an array of numbers as an argument
// let array = [1, 2, 3, 4, 5, 6]

// Define a function that takes in an array of numbers and
// returns a new array containing only the primes
// let arrayOfPrimes = [3, 11, 4, 19, 13, 10]

// Define a function that takes in a 2D array of numbers and
// returns the total sum of all elements in the array
// let nestedArray = [ [1, 2, 3], [1, 2, 3] ]

// Define a function that takes in an array of elements and returns a
// 2D array where the subarrays represent unique pairs of elements
// let array = [12, 11, 10, 9, 8]

// Define a function that takes in an array of numbers as an argument and returns
// the smallest value in the array; if the array is empty return null

// Define a function that takes in an array of numbers as an argument and
// returns the smallest value in the array; if the array is empty return null
// can you do the maximum value?
