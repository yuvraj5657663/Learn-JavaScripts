const  myArr = [0, 1,2, 3, 4, 5, 6]
console.log(myArr[3]);

const friends = ["rishu", "sunny", "gulshan", "yuvraj"]
const family = ["mom", "dad", "sis", "bro"]
friends.push(family)

console.log(friends[0]);

const myarr2 = new Array(1, 2, 3, 4, 5, 6)
console.log(myarr2[4]);

myArr.push(7)
myArr.push(8)
myArr.pop()
myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(4));

const newArr = myArr.join()
console.log(typeof newArr);
console.log(myArr);


console.log("A", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


console.log(friends);
console.log(friends[4][3]);
console.log(friends[4]);


const latestArr = ["bike", "car", "honda"];
const jurneyArr = ["hero", "maruti", "shine"];
const allNewArr = latestArr.concat(jurneyArr)
console.log(allNewArr);

const letest_arr = ["bike", "car", "honda"];
const jurney_arr = ["hero", "maruti", "shine"];
const all_new_arr = [...latestArr, ...jurneyArr];
console.log(all_new_arr);

const another_array = [1, 2, 3, 5, 6, [2, 3, 4, 7], 4, 8, 9, [4, 3, 2, [3, 5, 3,]]]
const real_array1 = another_array.flat(Infinity)
const real_array2 = another_array.flat(2)
console.log(real_array1);
console.log(real_array2);

console.log(Array.isArray("yuvraj"));
console.log(Array.from("yuvraj"));
console.log(Array.from({ name: "yuvraj" }));

let num1 = 100
let num2 = 200
let num3 = 300
console.log(Array.of(num1, num2, num3));


