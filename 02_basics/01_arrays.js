// ARRAYS

const myArr = [1,2,3,4,5]
const myHeros = ["Iron Man", "Thor", "Scarlet Witch", "Black Widow"]
const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr2)
// console.log(myArr)

// METHODS
// myArr.push(6)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9))

const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// SLICE AND SPLICE

console.log("A ", myArr)


const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3)
console.log("C  ",myArr)
console.log(myn2)

 // Spilce manipulate the original array and return the removed elements, while slice does not change the original array and returns a new array containing the selected elements.
 
