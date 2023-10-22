//  switch syntax

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch (month){
    case 1:
    console.log("jan");
        break;
    case 2:
    console.log("feb");
        break;
    case 3:
    console.log("mar");
        break;
    case 4:
    console.log("april");
        break;
    case 5:
    console.log("may");
        break;
    
    default:
        console.log("default case match");
        break;


}

const userEmail = []
if (userEmail) {
    console.log("got user email");
} else {
    console.log("don't have user email"); 
}

// falsy value
// false , 0 , -0 , BigInt 0n , "", null , undefined, NaN


// truthy values
// "0" , 'false', " ", [] , {}, Function(){}

if (userEmail.length === 0) {
    console.log("array is empty");
}
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// nullish coalescing operator (??): null undefinded

let val1;
val1 = 5 ?? 10 
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);


// terninary operator

// condition ? true : false
const iceTeaPrices = 100 
iceTeaPrices <= 80 ? console.log("less than 80 ") : console.log("more than 80")