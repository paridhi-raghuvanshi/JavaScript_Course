let score = "33abc"
//console.log(typeof score)
//console.log(typeof (score))
let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber) // this will return NaN because "33abc" cannot be converted to a number

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)
// 1 => true
// 0 => false
// "" => false
// "paridhi" => true

let someNumber = 4
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

// OPERATIONS
let value = 3
let negValue = -value
//console.log(negValue)

let str1 = "hello"
let str2 = " paridhi"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2) // this will return "12" because when we add a string and a number, the number is converted to a string and concatenated
console.log("1" - 2) // this will return -1 because when we subtract a number from a string, the string is converted to a number and the operation is performed
console.log("1" + 2 + 2)
console.log(1 + 2 + "2") // this will return "32" because when we add a number and a string, the number is converted to a string and concatenated



