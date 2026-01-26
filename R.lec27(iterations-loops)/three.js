//use of for of 

// ["","",""]

//[{}, {}, {}]

const arr = [1,2,3,4,5,6]

// for (const i of arr) {
//     console.log(i)
    
// }

const greeting = "jabsdvilua vbialys voauh gvils"
// for (const i of greeting) {
//     console.log(i)
// }

// TO ENTER THE CHAR IN THE OUTPUT YOU NEED TO USE `` BACK SOMETHING

//MAP
const map = new Map()
map.set("in", "india")
map.set("usa", "united state of america")
map.set("fr", "france")

// console.log(map)


// for (const [i,j] of map) {
//     console.log(i , `-->`, j)
    
// }
const myobject = {
    "game1" : "cbns",
    "game2" : "xnfud"
}
for (const [key, value] of myobject) {
    console.log(key, '-->',value)
    
}

/// OBEJCTS CANNOT BE ITERABLE