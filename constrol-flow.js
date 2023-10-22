// if statement
const isUserLoggedIn = true
if (isUserLoggedIn) {
    console.log(isUserLoggedIn);
}

if (2 == "2") {
    console.log("executed"); // checking two value with camparison it is executed or not
}

// if (2 === "2") {
//     console.log("executed");   // check data type and value to be an executed
// }


const temp = 41
if (temp === 41 ) {
    console.log("less than 50 ");

}
console.log("temp is greater than 50");


if (temp === 41) {
    console.log("less than 50");

} else {
    console.log("greater than 50 ")
}
console.log("executed")


// const score = 200
// if (score > 100) {
//     var power = "fly" // let and const use to do not defined but var is globle scope , it is allow executed outside then and because let and const do not access out side the scope
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);


const balance = 1000
if (balance > 500) console.log("test"),// iss trah se code readable nahi hota hai do not recommeded to allow to write this code this type 
    console.log("test2");


const num = 1000
if (num < 500) {
    console.log("less than 500");
} else if (num < 750) {
    console.log("less than 750");
} else if (num < 900) {
    console.log("less than 900");

} else {
    console.log("less than 1200");
}


const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard && 2 == 2) {
    console.log("allow to buy course");
}

const userLoggedIn1 = true
const debitCard1 = true

if (userLoggedIn1 && debitCard1 && 2 == 3) {   // agar condition wrong hai to uske execute hi nahi karta hai.
    console.log("allow to buy course");        // for eg agar user email and password dono mai se kisi ka information wrong deta hai to uske access anhi karne dena hai 
}

const loggedInFromGoogle = false
const loggedInFromEmail = true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in "); 
}