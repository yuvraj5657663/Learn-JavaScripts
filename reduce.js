const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
console.log(myTotal);

const beforeNum = [1, 2, 3]
const afternum = beforeNum.reduce((acc, curr) => acc + curr, 0)
console.log(afternum);



const shopingCart = [
    {
    itemName: "js course",
    price: 2999
    },
    {
    itemName: "python",
    price: 1999
    },
    {
    itemName: "web-devlopment",
    price: 4999
    },
    {
    itemName: "java",
    price: 6999
    },
]
const priceToPay = shopingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);