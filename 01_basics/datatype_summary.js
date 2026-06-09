// primitive 
// 7 types : String, Number, BigInt, Boolean, Symbol, null, undefined

// non-primitive (ref)
// object : Array, Object, Function

const id = Symbol("123")
const anotherId = Symbol("123")
//console.log( id === anotherId)

const bigNumber = 7464972676345686052n


const heros = ["Tony Stark", "Captain America", "Thor"];
let myObj = {
    name: "Paridhi",
    age: 21,
}
const myFunction = function(){
    //console.log("Hello World")
}

//console.log(typeof bigNumber)


//MEMORY
// stack(primitive), heap(non-primitive)
let myName = "Paridhi"
let anotherName = myName
anotherName = "Raghuvanshi"
console.log(myName)
console.log(anotherName)

//heap
let user1 = {
    email: "paridhi@example.com",
    upi: "paridhi@ybl"
}
let user2 = user1
user2.email = "paridhi@google.com"
console.log(user1.email)
console.log(user2.email)
