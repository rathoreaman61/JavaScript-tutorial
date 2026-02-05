let MyNumbers = [1,2,3,4,5,6,7,8,9,10];

let mapMethod = MyNumbers
                .map((value)=>(value *10))
                // .map((value)=>(value + 1));
            
console.log(mapMethod)
mapMethod = mapMethod.filter((value)=>(value >= 40));
console.log('_______________mapMethod______________')
console.log(mapMethod);
