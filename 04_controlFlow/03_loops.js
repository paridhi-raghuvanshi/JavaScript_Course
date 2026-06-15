// FOR OF LOOP

const arr = [1,2,3,4,5]
for (const num of arr){
    // console.log(num);
}

const greeting = "HELLO"
for(const greet of greeting){
    // console.log(`Each char is ${greet}`)
}

// MAPS-- unique value

const map = new Map()
map.set('IN', "INDIA")
map.set('BH', "BHARAT")
// console.log(map)

for(const[key, value] of map){
    console.log(key, ":-", value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'pubg'
}


// for(const[key, value] of myObject){
//     console.log(key, ":-", value);
// }

const myObject2 = {
    js: 'javascript',
    cpp:'C++',

}

for(const key in myObject2){
    console.log(`${key} shortcut if for ${myObject}`)
}

// FOR EACH LOOp

const coding = ["js", "java", "cpp", "python"]
coding.forEach( function (item){
    console.log(item);
})

coding.forEach( (item, index, arr) => {
    //console.log(item, index, arr);
})





const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "java",
        languageFileName: "java",
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
