// DATES

const myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleString())
// console.log(myDate.getTime())
// console.log(myDate.getFullYear())
// console.log(typeof myDate)

// let newDate = new Date(2026, 0, 22)
let newDate = new Date("2026-01-22")


// console.log(newDate.toLocaleString())
// console.log(newDate.toDateString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(newDate.getTime())

let date1 = new Date()
console.log(date1)
console.log(date1.getTime())
console.log(date1.getMonth()+1)
console.log(date1.getDay())

date1.toLocaleString('default', {
    weekday: 'long',
 
})


