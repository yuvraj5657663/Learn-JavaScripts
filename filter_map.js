// const friends = ["saurav", "rishu", "sunny", "gulshan", "rahul", "pawandeep", "yuvraj"]

// const values = friends.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(values);


const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = num.filter((num) => num > 4)
console.log(newNum);
const newNum1 = num.filter((num) => {
   return num>4 //agar aap scope open karte hai tho aapko retrun ka use karna
})
console.log(newNum1);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = []
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
console.log(newNums);


const number = [12, 23, 31, 40, 34, 41, 53, 54, 25, 24, 35, 3, 56, 50, 35, 60, 58, 35]
const newNumber = number.map((num) => { return num + 10 })
console.log("map values: ", newNumber);
const newNumbers = number
    .map((num) => num * 10) 
    .map((num => num + 1))
    .filter((num)=>num>=400)
console.log(newNumbers);