// Datatypes in JavaScript
"use strict";// Enabling strict mode for better error checking

// 1. Primitive Types (Simple values)
// Stored by value and are immutable. 
// String: Text, e.g., "Hi".
// Number: Decimals and integers.
// BigInt: Very large integers (e.g., 100n).
// Boolean: true or false.
// Undefined: Variable declared but not assigned.
// Null: Explicitly "no value".
// Symbol: Unique, private identifiers. 
// 2. Non-Primitive Type (Complex structures)
// Stored by reference and are mutable. 
// Object: A collection of key-value pairs.
// Note: Arrays and Functions are technically specialized objects. 



// Examples of different datatypes
//Converting primitive all datatypes to number datatype;

let name = "John Doe";

let score = '33bc'; //string to number

let scoreInNumber = Number(score);

console.log('String to number: ' + scoreInNumber);

console.log(typeof scoreInNumber);

console.log(typeof NaN);
//js don't have scrict chack so use carefully that's why people use typescript 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let booleanValue = true; //boolean to number;

let booleanToNumber = Number(booleanValue);

console.log('boolean to number: ' + booleanToNumber);

console.log(typeof booleanToNumber); 

//Note: true converts to 1 and false converts to 0
//javascript truthy and falsy values totall 7 falsy values null, undefined, 0, NaN, ''(empty string), false, document.all
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let nullValue = null; //null to number;

let nullToNumber = Number(nullValue);

console.log('null to number: ' + nullToNumber);

console.log(typeof nullToNumber);  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let neail = true;

let nulltostr = String(neail);



console.log(nulltostr)



//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);









