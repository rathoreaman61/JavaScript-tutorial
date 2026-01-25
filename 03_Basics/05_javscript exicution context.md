📘 JavaScript Execution Context – Notes
🔹 What is Execution Context?

Execution Context is the environment where JavaScript code is executed.
It decides which variables, functions, and objects are accessible at any time.

JavaScript has three types of Execution Contexts:

1️⃣ Global Execution Context (GEC)

Created when the JavaScript program starts

Only one Global Execution Context exists

All global variables and functions are stored here

In browser:

this → refers to the window object

Memory is stored in an object-like structure → { }

👉 Global Environment contains:

Global variables

Global functions

this keyword

2️⃣ Function Execution Context (FEC)

Created every time a function is called

Each function call gets its own execution context

Multiple Function Execution Contexts can exist

They are pushed into the Call Stack

Example:
function add() {
  let x = 10;
}
add();


➡️ A new Function Execution Context is created for add()

3️⃣ Eval Execution Context

Created when eval() function is used

Executes code inside eval()

Rarely used and not recommended

Slower and unsafe

eval("let a = 5");

⚙️ Phases of Execution Context

Each Execution Context has two phases:

1️⃣ Memory Creation Phase (Creation Phase)

Memory is allocated

Variables are set to undefined

Functions are stored with their full code

This explains hoisting

📌 Example:

console.log(a); // undefined
var a = 10;

2️⃣ Execution Phase

Code is executed line by line

Variables are assigned actual values

Functions are executed

📌 Example:

var a = 10;
console.log(a); // 10

🧠 Short Summary

Global Execution Context → Created first

Function Execution Context → Created when function is called

Eval Execution Context → Created by eval()

Two Phases:

Memory Creation Phase (variables = undefined)

Execution Phase (values assigned & code runs)