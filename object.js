// object litrels

const mySym = Symbol("key1")


const jsUser = {
    name: "yuvraj",
    "fullname": "yuvrajkumar",
    [mySym]: "mykey1",
    age: 19,
    location: "munger",
    email: "yuvrajkumar4588@gmail.com",
    isLoggedIn: false,
    LastLogInDays: ["monday","saturday"]
}  

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["fullname"])
console.log(typeof jsUser[mySym])
console.log(jsUser[mySym])

jsUser.email = "yk811211@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "yskmp93423@gmail.com"
console.log(jsUser);


jsUser.greeting = function () {
    console.log("hello Js user");
}
jsUser.greetingTwo = function () { 
    console.log(`hello Js user ${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo);
console.log(jsUser.greetingTwo());
