//js very importent thing dome events
//singolton objact.create right now i forgat this but i will learn in fucking future.

//Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: 'Aman',
    age: 18,
    address: 'Jaipur',
    email: 'aman@google.com',
    [mySym]: mySym,
    lastLoginDay: ['Monday', 'Suterday'],
    'my favename': 'Aoan'

};


// How to access an object

console.log(JsUser.name);
console.log(JsUser['address']); // this is very importent
console.log(JsUser.name);
console.log(JsUser[mySym]);
console.log(JsUser['my favename']);


JsUser.name = 'Amonji';

// Object.freeze(JsUser);// this mathord not showing error but you canot change values

JsUser.name = 'Amon';

console.log(JsUser.name);


JsUser.greating = function () {
    console.log('tari ma kaa bhosda fad da gi ' + `   ${this['my favename']}`)
}

console.log(JsUser);
console.log(JsUser.greating());



//singolton objacts

// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = '123@abx'
tinderUser.name = 'kundan'
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const ragulerUser = {
    email: 'kundan@google123.com',
    fullName: {
        usernameFullname: {
            firstname: 'kandpail',
            lastname: 'choresiya'
        }

    }

}

console.log(ragulerUser.fullName.usernameFullname.lastname);

const Obj1 = { 1: 'a', 2: 'b' };
const Obj2 = { 3: 'a', 4: 'b' };
const Obj3 = Object.assign(Obj1, Obj2);
const Obj4 = { ...Obj1, ...Obj2 };
console.log(Obj4)
console.log(Obj3);


let user = [
    {
        id: 1,
        email: 'a@gmail.com'
    }


]


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('kundan'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

console.log(course.courseInstructor)
const {courseInstructor} = course;
console.log(courseInstructor);
const {courseInstructor: instructor} = course;
console.log(instructor);
