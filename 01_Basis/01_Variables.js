//variables

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  var is function-scoped and can be redeclared, but it is prone to bugs due to hoisting [1, 3].
var userId = "123@aman";
var userId = "123@bitu";
var testUserId = () => {
    var userId = "123@Aman";
    console.log(userId)
}
testUserId()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let is block-scoped and allows value updates, making it the standard for variables that change [1, 2].

let Yourname = "aman";//let name = "aman"; you try to redeclar giving you error

Yourname = "Amon";// allows value updates



function yourNametester() {
    let Yourname = "AmonJi";
    console.log(Yourname)
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//const is block-scoped and cannot be reassigned, ensuring value stability for constants [1, 3]. 

const Myname = "aman";//let name = "aman"; you try to redeclar giving you error

//const Myname = "Amon";// Notallows value updates



function yourNametester() {
    const Yourname = "AmonSa";
    console.log(Yourname)
}
//this is also block-scoped 


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//you able to declear a varible without let var const but not recomended
city = 'jaipur';

console.table([userId, Yourname, Myname, city]);

