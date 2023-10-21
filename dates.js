let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.getMilliseconds());
console.log(myDate.getTimezoneOffset());

let myCreatedDate = new Date(23, 32, 2023)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 2)
console.log(myCreatedDate.toLocaleDateString())
console.log(myCreatedDate2.toLocaleString())

let yourDate = new Date("01-03-2023")
console.log(yourDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(yourDate.getTime());


let newDate = new Date()
console.log(newDate);
console.log(newDate.getTime());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getTimezoneOffset());
console.log(newDate.valueOf());

console.log(newDate.toLocaleString('default', { weekday: "long" }));