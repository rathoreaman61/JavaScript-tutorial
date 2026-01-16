//array

const myArray = [0, 1, 2, 3, 4]; //0 besed indexing
//heap meamory use changing thing in orignal array
//made shellow copy aim same mean address in mamory same

const myHeros = ['BatMan', 'Spiderman', 'Roket', 'Groot', 'Youdu', ' Peter Quill'];

const myArr = new Array(1, 2, 3, 4, 5, 6, 7,);

console.log(myArray[1])

//array methods
// myArray.push(5)//add in last
// myArray.pop()//remove last index

// myArray.unshift("2")//use carefully and add starting index
// myArray.shift() //remove first


// console.log(myArray)
console.log(myArray.indexOf(5))

console.log(myArray.includes(4)) // that's giving booliean value exiset or not

console.log('a', myArray)

//Slice & Splice

const myn1 = myArray.slice(1, 3);
console.log('splice', myn1)
console.log('orignal',                        myArray)
console.log(myArray.splice(1,1,"AMAn"))
console.log('orignal',                        myArray)


//array2


