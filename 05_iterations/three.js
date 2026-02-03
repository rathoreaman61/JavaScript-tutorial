let arr = [1,2,3,4,5,6,7,8,910];
for (const i of arr) {
    console.log(i)
}

let person = {
    name: "Rahul",
    age: 25,
    profession: "Web Developer",
    isWorking: true
};


for (let key of Object.keys(person)) {
    console.log(key, person[key]);
}

for (const [key, value] of Object.entries(person)) {
    console.log(key, value);
}

