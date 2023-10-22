function sayMyName() {
    console.log("Y");
    console.log("U");
    console.log("V");
    console.log("R");
    console.log("A");
    console.log("J");

}
sayMyName()

function addTwoNumbers(number1, number2)
{
    console.log(number1 + number2);

}

function addTwoNumbers(number1, number2)
{
    let result2 = number1 + number2
    return result


}

function addTwoNumbers(num1, num2) {
    return num1 +num2
}
const result2 = addTwoNumbers(3, 5)
console.log(result2);
const result = addTwoNumbers(3, 8)
console.log("result: ", result);

 
function loginUserMsg(username) {
    if (username === undefined) {           //if (!username){ }
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMsg("yuvraj"))
console.log(loginUserMsg())

function calculateCartPrices(val1,val2,...num1) {
    return num1
}
console.log(calculateCartPrices(100,200,300,400,))

const user = {
    username: "yuvraj",
    prices: 199

}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and prices is ${anyobject.prices}`);

}
handleObject(user)
handleObject({
    username: "sam",
    prices:399
})

const newArr = [100, 200, 300, 400, 500] 
function retrunSecondValue(getArray) {
    return getArray[1]
}
console.log(retrunSecondValue(newArr));
console.log(retrunSecondValue([100, 200, 300, 400, 500] ));
