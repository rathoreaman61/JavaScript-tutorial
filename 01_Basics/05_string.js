//String
const name = "Aman";
const Planet = "Earth";
const whatMyDreem = "I Have To Sleep Frist";

const outDatedFeelsLike = "this is name "+ name + " address "+ Planet +" Dream " + whatMyDreem; //that's hard to undestand avoid this
const modernTampletLittrelsFeelsFrash = `This is name ${name} address ${Planet} Dream ${whatMyDreem}`//use most of the case Tamplet littrels

console.log(outDatedFeelsLike)
console.log(modernTampletLittrelsFeelsFrash)


const gameName = new String("AmanGAndu");

console.log(gameName);

//indexing start from 0 ;
console.log(` Indexing mean gameName[0]th index mean  ${gameName[0]}`);
//using charaAt
console.log(` Using charAt index mean  ${gameName.charAt(3)}`);

//find Charcter index number 
console.log(gameName.indexOf("Aman"))//give you first index

//include method is used to check string is present or not
console.log(gameName.includes("Aman"))


//want to see prototypes

console.log(gameName.__proto__);

//you want to see length

console.log(gameName.length)

//upperCase lowecase

console.log("upperCase " + gameName.toUpperCase());
console.log("lowerCase " + gameName.toLowerCase());


//substring use to get part of string & slice also use to get part of string but slice support negative indexing

console.log(gameName.substring(0,4))

console.log(gameName.slice(0,4))

console.log(gameName.slice(-5,9))

//trim is used to remove extra spaces & not work in between spaces

const stringWithSpaces = "     Aman GAndu     ";

console.log(stringWithSpaces.trim())

//split is used to convert string into array based on given parameter

const myFriends = "Aman, Raju, Somu, Monu, Tonu";

const friendsArray = myFriends.split(", ");

console.log(friendsArray);

//replace is used to replace part of string with new string

const newString = myFriends.replace("Aman", "Ankit");

console.log(newString);         

//repeat is used to repeat string multiple times

const repeatedString = "Ha! ".repeat(3);

console.log(repeatedString);        

//converting string to number & number to string









