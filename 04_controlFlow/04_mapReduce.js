// const myNums = [1,2,3,4,5,6]

// const newNums = myNums.map( (num) => {return num+10})

// const newNums = myNums
//                 .map((num) => num*10)
//                 .map((num) => num + 1)
//                 .filter((num) => num >= 40)
// console.log(newNums);

//REDUCe

const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc, currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`)
//     return acc + currVal
// }, 0)

const myTotal = myNums.reduce( (acc, currVal) => acc + currVal, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "JS Course", 
        price: 999
    },
    {
        itemName: "Py Course", 
        price: 1999
    },
    {
        itemName: "Java Course", 
        price: 2999
    }
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay)