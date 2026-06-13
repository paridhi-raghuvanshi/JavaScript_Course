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
// console.log(loginUserMessage("Paridhi"))

function calculateCartPrice(val1, val2, ...num1){
    return num1   
}
// console.log(calculateCartPrice(200,300,400, 70, 800))

const user = {
    username: "Paridhi",
    prices: 199
}
function handleObject(anyObject){
    // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}

handleObject(user)
handleObject({
    username: "Pari",
    price: 399
})

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue([10,40,50,67]));


