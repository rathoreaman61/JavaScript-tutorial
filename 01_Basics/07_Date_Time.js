//Dates

// const hiDate = new Date();
// console.log(hiDate);

// const hiDate = new Date();

// // 12-hour format (date + time)
// const time12Hr = hiDate.toLocaleString("en-IN", {
//   hour: "numeric",
//   minute: "numeric",
// //   second: "numeric",
//   hour12: true,
//   day: "2-digit",
//   month: "2-digit",
//   year: "numeric"
// });

// console.log(time12Hr);

// // Sirf normal time (12-hour)
// console.log(hiDate.toLocaleTimeString("en-IN", { hour12: true }));

// let newDate = new Date("2026,1,15");
// console.log(newDate.toLocaleString())

// let myTimeStamp =  Date.now()
// console.log(Math.floor(myTimeStamp.toLocaleString()))


let newLOOkingdate = new Date();
console.log(newLOOkingdate)
console.log(newLOOkingdate.getDate())
console.log(newLOOkingdate.getDay())
console.log(newLOOkingdate.getMonth())
console.log(newLOOkingdate.getFullYear())