const name = "yuvraj"
const repoCount = 50
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("yuvraj-kumar-singh")
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("k"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "        yuvraj       ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https//yuvraj.com/yuvraj%786singh"
console.log(url.replace('%786', '-'))
console.log(url.includes('saurav'))

console.log(gameName.split('-'));
