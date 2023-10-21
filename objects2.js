const tinderUser = new Object()
const tinderUser2 = {} //this is non singleton object in js

// console.log(tinderUSer); //this is singleton object

tinderUser.id = "abc343"
tinderUser.name = "rishu"
tinderUser.isLoggedIn = false
console.log(tinderUser);


const regularUser = {
    email: "yuvrajkumar4588@gmail.com",
    fullname: {
        userfullname: {
            firstname: "saurav",
            lastname: "kumar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);



const obj1 = {
    100: "rishu",
    200: "sunny",
    300: "gulshan",
    400: "saurav",
}
const obj2 = {
    101: "shine",
    102: "galmour",
    103: "splender",
    104: "hero-splender-plus",
    
}

const obj3 = {
    201: "ssc", 
    202: "ploytecnic",
    203: "ssc",
    204: "networking"

}
const obj4 = Object.assign({}, obj1, obj2, obj3 )
const obj5 = {...obj1,...obj2,...obj3}
console.log(obj4);
console.log(obj5);


const users = [
     {
        id:2,
        email:"yuvi@gmail.com"
    },
    {
        id:2,
        email:"yuvi@gmail.com"
    }, 
    {
        id:2,
        email:"yuvi@gmail.com"
    },

]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('islogged'));

const course = {
    coursename: "javaScripts",
    prices: "999",
    courseInstructor: "yuvraj"
}
const { courseInstructor } = course
const {courseInstructor: yuvi} = course
console.log(courseInstructor);
console.log(yuvi);

const { prices } = course
const { prices: rate } = course
console.log(rate);
console.log(prices);
