const user = {
    username: "yuvraj",
    price: 999,

    welcomeMsg: function () {
        console.log(`${this.username} ,welcome to websites`);
        console.log(this);
    }

}  
user.welcomeMsg()
user.username = "rishu"
user.welcomeMsg()
console.log(this);


function chai1() {
    let username = "saurav"
    console.log(this.username);
}

chai1()

const chai2 = () => {
    let username = "saurav"
    console.log(this.username);
    console.log(this);


}
chai2()

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(4, 6))
    

const addTwo1 = (num1, num2) => num1 + num2
console.log(addTwo(5,7))

const addTwo2 = (num1, num2) => (num1 + num2)
console.log(addTwo2(3, 4))


const addTwo3 = (num1, num2) => ({ username: "hitesh" })
console.log(addTwo3(3, 45))

