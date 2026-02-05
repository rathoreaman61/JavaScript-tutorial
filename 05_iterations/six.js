//const coding = ["js", "ruby", "java", "python", "cpp"]
// const values = coding.forEach( (item) {
////console.log(item);
//
//return item
// })
// console.log(values);


let num = [1,2,3,4,5,6,6,7,88,76,7,6,7,6,7,55,4,65,3,76,68,7,8,7,8,3,543];

let evenFiltering = num.filter((valueNumber)=>(valueNumber%2 == 0));
console.log(evenFiltering);
console.log('Length '+ evenFiltering.length);
console.log(num);
console.log('Number Length '+ num.length);


let newNums = [];
num.forEach((values) => {
if (values%2 == 0) {
    newNums.push(values)
}});

console.log(newNums);


const books = [
{ title: 'Book One', genre: 'Fiction', publish: 1981, 
edition: 2004},
{ title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
edition: 2008},
{ title: 'Book Three', genre: 'History', publish: 1999,
edition: 2007},
{ title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
edition: 2010 },
{ title: 'Book Five', genre: 'Science', publish: 2009,
edition: 2014},
{ title: 'Book Six', genre: 'Fiction', publish: 1987,
edition: 2010 },
{ title: 'Book Seven', genre: 'History', publish: 1986,
edition: 1996 },
{ title: 'Book Eight', genre: 'Science', publish: 2011,
edition: 2016 },
{ title: 'Book Nine', genre: 'Non-Fiction', publish: 1981,
edition: 1989},
];


let usersAskedbook = books.filter((bk)=>(bk.publish >'1992'));
usersAskedbook = books.filter((bk)=>{ return bk.genre === 'History'}));
console.log(usersAskedbook)