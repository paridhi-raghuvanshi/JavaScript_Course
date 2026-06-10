const marvel = ["thor", "iron man", "spiderman"]
const dc = ["superman", "batman", "flash"]
//marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3][0])

//PUSH return the existing array with the new element added at the end of the array, while CONCAT return a new array with the new element added at the end of the array. 

// marvel.concat(dc)
// console.log(marvel)
// const allHeroes = marvel.concat(dc)
// console.log(allHeroes)


const allNewHeroes = [...marvel, ...dc]
// console.log(allNewHeroes)
const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const myArr4 = anotherArr.flat(Infinity)
// console.log(myArr4)

// console.log(Array.isArray("Paridhi"))
// console.log(Array.from("Paridhi"))
// console.log(Array.from({name: "Paridhi"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))