/*
what is datatypes ?
->data types are used to describe the type of data that a variable can hold.

-> there are two type of data type in js 
     1) primative data type 
     2) non primative data type 

primative data  -> 

JavaScript has 8 Datatypes
1. String 
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

Non primative datatypes ->

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date

*/

// Number datatypes 
let a = 10;
let b = 2.3;

// string datatypes

let firstName = "yuvraj";
let lastName = "kumar";
let num = "23423";

// boolean datatypes

let x = true;
let y = false;

// objects

const person = { firstName: "yuvraj", lastName: "kumar" };

// array

const arr = ["rishu", "yuvi", "sunny"];

// date

const date = new Date("10-10-2023");

// undefined

let car;
console.log(car);

console.table([a, b, firstName, lastName, num, x, y, person, arr, date,car]);
console.log(date);



const score = 100
const scoreValue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);
const bigNumber = 434353535234553n



const heros = ["shaktiman", "naagraj", "doga"];
let myobj = {
    name: "yuvraj",
    age: "19",
}
const myFunction = function () {
    console.log("hello world");
}
console.log(typeof heros);