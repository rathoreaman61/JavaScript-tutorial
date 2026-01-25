const user = {
 username: "Aman",
 price: "200",
welcome:function (params) {
    console.log(`${this.username} ,welcome to the website`);
}
}

user.welcomeMassage()
user.username = 'sam';
user.welcomeMassage()

function chai() {
    console.log(this)
}

chai();

// const addTwo = (num1 = 2, num2 ) => {
// return num1 + num2;
// };



// const addtwo = (num1, num2) => num1 + num2; that's important for react js
// console.log(addtwo(1, 9));


const addtwo = (num1, num2) => (num1 + num2);
console.log(addtwo(1, 9));


// const addtwo = (num1, num2) => {num1 + num2};  not return 
// console.log(addtwo(1, 9)); 
