
var c = 300
let a = 300
if (true) {
    let a = 10;
    const b = 20;
    console.log("INNER: ", a);
}


console.log(a);
// console.log(b);
console.log(c);

function one() {
    const username = "hitesh"

    function two() {
        const website = "instagram"
        console.log(username);

        
    }
    // console.log(website);
    two()
}
one()


if (true) {
    const username = "hitesh"
    if (username == "hitesh") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website); //error

}
// console.log(username); //error



console.log(addone(5));
function addone(num) {
    return num +1
}

// console.log(addTwo(5)); //cannot before initailations is called hoisting
const addTwo = function (num) {
    return num +2
}
console.log(addTwo(5)); 
