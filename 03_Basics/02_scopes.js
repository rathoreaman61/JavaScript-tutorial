var c = 300;
let a = 400;

if (1) {
      let a = 10;
    const b = 20;
    console.log(`inner: ${a}`);
    }

  
  console.log(a);
  // console.log(b);
 // console.log(c);//
    

function one() {
  const username = "Aman Singh Rathore";
function two() {
  const website = "amanTube";
  console.log(username);
}
// console.log(website);  showin error because child able to inhearit his perant element value but perent not able to to
//  get child value like an example father give ice creem to son but father not snatched kid's icecream
two()
}
one()


if (true) {
  const username = 'hitesh';
  if(username[0] === 'h' && username[1] === 'i'){
     const website = 'youtube';
     console.log(username + website)
  }
  
}

  
  //++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++//


  
const  numTwo = function (num) { //that's called exprations
 return num + 2;
    }
 
console.log(numTwo(5));


console.log( addone(5));
function addone (num) {
       return num + 1;
}

