//js very importent thing dome events
//singolton objact.create right now i forgat this but i will learn in fucking future.

//Object literals

const mySym = Symbol("key1")

const JsUser = {
     name:'Aman' ,
     age:18,
     address:'Jaipur',
     email:'aman@google.com',
     [mySym]: mySym,
     lastLoginDay:['Monday','Suterday'],
     'my favename':'Aoan'
     
};


// How to access an object

console.log(JsUser.name);
console.log(JsUser['address']); // this is very importent
console.log(JsUser.name);
console.log( JsUser[mySym]);
console.log(JsUser['my favename']);


JsUser.name = 'Amonji';

Object.freeze(JsUser);// this mathord not showing error but you canot change values

JsUser.name = 'Amon';

console.log(JsUser.name);


