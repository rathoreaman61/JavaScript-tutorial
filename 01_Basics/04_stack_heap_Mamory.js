// STACK MEMORY - Primitive values
// Stack stores primitive types: number, string, boolean, null, undefined, symbol
let age = 25;
let name = "John";
let isActive = true;

console.log("=== STACK MEMORY (Primitives) ===");
console.log("age:", age);
console.log("name:", name);
console.log("isActive:", isActive);

// When you assign a primitive to another variable, it copies the value
let age2 = age;
age2 = 30;
console.log("age:", age, "age2:", age2); // age: 25, age2: 30 (independent)

// HEAP MEMORY - Reference types
// Heap stores objects, arrays, functions
let person = {
  name: "Alice",
  age: 28,
};

let user = {
  name: "Bob",
  age: 35,
};

console.log("\n=== HEAP MEMORY (Objects) ===");
console.log("person:", person);
console.log("user:", user);

// When you assign an object to another variable, both reference the SAME object
let personCopy = person;
personCopy.age = 40;
console.log("person.age:", person.age); // 40 (both point to same object)
console.log("personCopy.age:", personCopy.age); // 40

// Arrays also use heap memory
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("arr1:", arr1); // [1, 2, 3, 4]
console.log("arr2:", arr2); // [1, 2, 3, 4]

// To create a true copy of an object, use spread operator or Object.assign
let personActualCopy = { ...person };
personActualCopy.age = 50;
console.log("person.age:", person.age); // 40 (unchanged)
console.log("personActualCopy.age:", personActualCopy.age); // 50