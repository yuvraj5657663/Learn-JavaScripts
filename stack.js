// stack (primative datatypes) , heap (non-primative datatypes)

let myEmail = "yuvrajkumar4588@gmail.com";
let anotherEmail = myEmail
anotherEmail = "yk811211@gmail.com"

console.log(anotherEmail);
console.log(myEmail);

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"

}

let userTwo = userOne;
console.log(userTwo);

userTwo.email = "ys3535@gmail.com";
console.log(userOne.email);