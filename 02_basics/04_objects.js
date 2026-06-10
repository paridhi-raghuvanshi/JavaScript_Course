// Constructor or SINGLETON
const tinderUser = new Object() // SINGLETON OBJECT
const tinderUSer = {} // NON SINGLETON OBJECT
tinderUser.id = "123abc"
tinderUser.name = "Paridhi"
// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName:{
            firstName: "Paridhi",
            lastName: "Chaudhary"
        }
    }
}
// console.log(regularUser.fullName?.userFullName)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"a"}
// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2}
console.log(obj4)

const users = [
    {
        id:1,
        email:"p@gmail.com"
    }
]
// users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "youtube"
}

//course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor) 

// const navbar = ({company}) => {

// }
// navbar(company = "Paridhi")

//API

// {
//     name: "Paridhi",
//     courseName: "js in hindi",
//     price: "free"
// }

[
    {},
    {},
    {},
]