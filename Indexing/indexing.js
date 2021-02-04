console.log('marker'[0]); // get the 0th value of this string. First letter starts at 0
console.log('marker'[2 + 2]); // Will get the 4th index value which is 'e'


let str = 'potato';
console.log(str[5]); //o
console.log(str[6]); //undefined
console.log(str[str.length - 1]); //good way to get the last letter of a string.
console.log(str.indexOf('o')); //finding the index in a string
console.log(str.indexOf('c')); // -1 which means they can't find it.
console.log(str.indexOf('ota')); // 1 -> will find index 1 because that's where it starts.

let sentence = "her everyone, how are you doing?";
console.log(sentence.indexOf('every') > -1); // true

let myString = 'qrstu';
console.log(myString.slice(1)); //grabs from index 1 to the end
let subStr = (myString.slice(1, 3)); //defining new variables substr to run slice function and ending on 3rd index.
console.log(subStr);
//You can also slice and index negative numbers which will start from 0 index and go backwards.
