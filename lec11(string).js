const name = "nilesh"
const repocnt = 09

console.log(`hwllow my name is ${name} and the number of repo i have is ${repocnt}`);


const gname = new String("vnsfo-dh")
// console.log(gname[0])
// console.log(gname.length)
// console.log(gname.toUpperCase())  /// dont change the original string..premitive
// console.log(gname.charAt(5))// -> space had been counted
// console.log(gname.indexOf("v"))


//sub string
const newstr = gname.substring(0,3)/// this cannnot take negative value
console.log(newstr)

//slice
const astring = gname.slice(-8,3)
 console.log(astring)

// trim-> removes the spaces from the begening and from th end

const newstring = "   nilesh n    "
console.log(newstring)
console.log(newstring.trim()) // this pretivulary removes the the feist and the last string from the string


///replace
const url = "https://nilesh@gmail.com"
console.log(url.replace("com","ha yaha change ho gaya"))

// includes
console.log(url.includes("nilesh"))

//splits

console.log(url.split("s"))



