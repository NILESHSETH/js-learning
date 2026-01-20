const ar = ["nielsh", "kabnir", "naman", "abhinav"]
const br = ["boron", "sidanshu", "abhishek"]


// ar.push(br)
// console.log(ar)
// this is a very bad habit
const cr = ar.concat(br)// this can help us to return the ((((new)))) arrya
console.log(cr)
// this is not generally used 

const all = [...ar,...br]//...sees the array elemenst individually
console.log(all)// they all add the elemsts individaully



//NOW LEARINIG TO CONVERT THE STRING INTO ANOTHER ARRAY 

console.log(Array.isArray("nielsh"))
console.log(Array.from("nielsh"))
console.log(Array.from({name :"nielsh"}))// this must be readed
console.log("wew have to tell then..what i need in return")
let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score1,score2,score3))