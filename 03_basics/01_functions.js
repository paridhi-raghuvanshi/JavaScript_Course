// console.log()
// function sayMyName(){
//     console.log("P");
//     console.log("A");
//     console.log("R");
//     console.log("I");
//     console.log("D");
//     console.log("H");
//     console.log("I");
// }
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }


// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)


// const result = addTwoNumbers(3, "4")
// console.log("Result: " , result)

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result
// }
// const result = addTwoNumbers(3, 4);
// console.log("Result: ", result);

function addTwoNumbers(number1, number2){
    return  number1 + number2
}
const result = addTwoNumbers(3, 4);
// console.log("Result: ", result);

function loginUserMessage(username = "user"){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Paridhi"))
