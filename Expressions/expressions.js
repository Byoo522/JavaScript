console.log('Hello');
console.log(0);
console.log(42);
console.log(11.5);
console.log(-12);

console.log(1 + 1);
console.log(2 * 12);
console.log(120 / 12);
console.log(2 - 12);

console.log(1 + 2 * 5);
console.log((1 + 2) * 5);

// getting the remainder after 13/5 and leaving remainder (MODULO Operator or MOD)
console.log(13 % 5); //2
console.log(15 % 5); //0
console.log(13 % 6); //1
console.log(8 % 4); //0
console.log(4 % 10); //4


//Strings, Double or single quotations both work.
console.log("dsadsa023910lakd!@!@!#");
console.log('dsadsa023910lakd!@!@!#');
console.log('"dsadsa023910lakd!@!@!#"');

//Strings
console.log("mouse" + "rat");

//Uppercase and lowercase
console.log("cat".toUpperCase());
console.log("DOG".toLowerCase());


//BOOLEAN DATA TYPES
// === strict equal
// == loose equal
// !== not equal
// < less than
// > greater than
// <= less than or equal to
// >= greater than or equal to
console.log(true);
console.log(false);
console.log(!true);
console.log(!false);
console.log(false && false); //double amperstand for 'AND'
console.log(false && true); //double amperstand for 'AND'
console.log(true && false); //double amperstand for 'AND'
console.log(true && true); //double amperstand for 'AND'
console.log(false || false); //pipe for 'OR'
console.log(false || true); //pipe for 'OR'
console.log(true || false); //pipe for 'OR'
console.log(true || true); //pipe for 'OR'
console.log(false && false || true); //Cine iyt as true. && takes precedence over || TRUE
console.log(false && (false || true)); //Cine iyt as true. && takes precedence over || FALSE
console.log(42 === 42); // === is equal to
console.log(42 !== 42); // !== no equal to
console.log(42 < 2); // < less than -> FALSE
console.log(42 > 2); // > greater than -> TRUE
console.log(42 <= 2); // <= less than or equal to -> FALSE
console.log(42 >= 2); // >= greater than or equal to -> TRUE

console.log('apple' === 'apple'); //True
console.log('apple' === 'Apple'); //False
console.log('cat' < 'caterpillar'); //True

console.log(42 === '42'); //FALSE
console.log(42 == '42'); //TRUE - matches values across data types
