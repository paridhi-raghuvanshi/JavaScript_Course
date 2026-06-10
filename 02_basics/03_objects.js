// object literals
//Object.create CONSTRUCTOR METHOD

//Object Literals
const mySym = Symbol("keys1")
const jsUser = {
    name: "Paridhi",
    "fullName": "Paridhi Raghuvanshi",
    age: 18,
    [mySym]: "myKey1",
    email: "paridhi@google.com",
    location: "muzaffarnagar",
    isgLoggedIn: false
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["fullName"])

jsUser.email = "Paridhi22@gmail.com"
// Object.freeze(jsUser)

jsUser.greeting = function(){
    console.log("Hello jsUser")
}
// console.log(jsUser.greeting)
// console.log(jsUser.greeting())


jsUser.greeting2 = function(){
    console.log(`Hello jsUser, ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greeting2())

