const array = [1,2,3,4];

const initiailValue = 0;

const arrayReduce = array.reduce((intial,array)=>{console.log(`intia= ${intial} + array ${array} `)
return intial + array },initiailValue);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

const priceToPay = shoppingCart.reduce((acc,value)=>(acc + value.price),0);

console.log(priceToPay);

