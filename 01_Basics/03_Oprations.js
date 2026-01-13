/*
====================================
JavaScript Operators – Simple Docs
(GitHub Ready, Beginner Friendly)
====================================
*/

// 1) Arithmetic Operators
let a = 10;
let b = 5;

console.log(`Addition: ${a} + ${b} = ${a + b}`);
console.log(`Subtraction: ${a} - ${b} = ${a - b}`);
console.log(`Multiplication: ${a} * ${b} = ${a * b}`);
console.log(`Division: ${a} / ${b} = ${a / b}`);
console.log(`Remainder: ${a} % ${b} = ${a % b}`);
console.log(`Power: ${a} ** ${b} = ${a ** b}`);

// 2) Assignment Operators
let x = 5;
x += 3;
console.log(`After += : ${x}`);
x *= 2;
console.log(`After *= : ${x}`);

// 3) Comparison Operators
console.log(`5 == "5" : ${5 == "5"}`);
console.log(`5 === "5" : ${5 === "5"}`);
console.log(`10 > 5 : ${10 > 5}`);

// 4) Logical Operators
console.log(`true && false : ${true && false}`);
console.log(`true || false : ${true || false}`);
console.log(`!true : ${!true}`);

// 5) Increment / Decrement
let c = 1;
c++;
console.log(`After c++ : ${c}`);
--c;
console.log(`After --c : ${c}`);

// 6) Ternary Operator
let age = 18;
console.log(`Voting Status: ${age >= 18 ? "Adult" : "Minor"}`);

// 7) Type Operator
console.log(`Type of 10 : ${typeof 10}`);
console.log(`Type of null : ${typeof null}`);

// 8) Spread Operator
let arr = [1, 2];
let newArr = [...arr, 3];
console.log(`Spread Result: ${newArr}`);


