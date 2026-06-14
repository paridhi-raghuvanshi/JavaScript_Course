
if(true){
    let a = 10
    const b = 4
    var c = 5
}
// console.log(a) ERROR
// console.log(b) ERROr
// console.log(c)

function one(){
    const username = "Paridhi"
    
    function two(){
        const website = "Youtube"
        console.log(username)
    }
}

if(true){
    const username = "Paridhi"
    if(username === "Paridhi"){
        const website = " Youtube"
        // console.log(username + website)
    }
}


// ubuibiu

//ARROW FUNCTION

const user = {
    username: "P",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage()
user.username = "hehe"
user.welcomeMessage()


// ar
function chai(){
    username = "Paridhi"
    // console.log(this)
    // console.log(this.username)
}
chai()

const one1 = () => {
    username = "Paridhi"
    // console.log(this)
}

chai()

const add2 = (num1, num2) => {
    return num1 + num2
}
console.log(add2(2,3))

// IMPLICIT RETURN

const add3 = (num1, num2) => num1 + num2

console.log(add3(2,3))


