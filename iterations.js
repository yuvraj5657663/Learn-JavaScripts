// for

for (let i = 0; i <= 10; i++){
    const element = i;
    console.log(element);
}
// console.log(element);

for (let i = 1; i < 10; i++){
    console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++){
        // console.log(`Inner loop value ${j} and inner loop ${i} `);
        console.log(i + " * " + j + " = " + i * j);
    }
}


for (let i = 0; i <= 10; i++){
    const element = i;
    if (element == 5) {
        console.log("5 is the best number ");

    }
    console.log(element);
}

let myArr = ["rishu", "yuvraj", "sunny"]
console.log( "my array length is : " , myArr.length);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
    
}

// break and continue

for (let index = 1; index <= 20; index++){
   
    if (index == 5) {
        console.log(`detected 5`);
        break
    }
     console.log(`value of index is ${index}`);
}
for (let index = 1; index <= 20; index++){
   
    if (index == 5) {
        console.log(`detected 5`);
        continue
    }
     console.log(`value of index is ${index}`);
}




// while loop
let index = 2
while (index <= 20) {
    console.log(` value of index is ${index} `);
    index = index +2
}

let cars = ['car', 'maruti', 'suszki', 'bmw', 'safari']
let arr = 0
while (arr < cars.length) {
    console.log(`value is ${cars[arr]} `);
    arr = arr + 1
}


let score = 11
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);


// for loop

const arr1 = [1, 2, 3, 4, 5]
for (const num of arr1) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


// maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "united State of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

for (const key of map) {
    console.log(key);
}
for (const[key , value]  of map) {
    console.log(key , ':-', value);
}

// const myObj = {
//     game1 : 'NFS',
//     game2: 'Spiderman'
// }
// for (const [key, value] of myObj) {
//     console.log( key, ':-', value)
// }

const myObj = {
    js: 'javaScript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObj) {
    console.log(key)
    console.log(`${key} shortcut is for ${myObj[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
    console.log(key);
}


const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach(function (val) {
    console.log(val);
})
    
coding.forEach((item) => {
    console.log(item);
})

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)


coding.forEach((item, index, arr) => {
    console.log(item, index, arr); 
})


const myCoding = [
    {
        languageName: "java",
        languageFileName : "java"
    },
    {
        languageName: "ruby",
        languageFileName : "rb"
    },
    {
        languageName: "data statrcture",
        languageFileName : "dsa"
    },
    {
        languageName: "database",
        languageFileName : "db"
    },
    {
        languageName: "cloud-computing",
        languageFileName : "cc "
    },
]
 
myCoding.forEach(
    (item) => {
        console.log(item.languageName);
}
)