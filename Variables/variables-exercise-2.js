let apple; // undefined
console.log(apple);

apple = 5; //5
console.log(apple);

apple + 1; //5. Apple + 1 doesn't do anything. needs to be apple = apple + 1
console.log(apple);

apple += 1; //6
console.log(apple);

let banana = apple; //6
console.log(banana);

banana = banana / 2; //3
console.log(banana);

console.log(apple); //6
