//ARRAY

// const arr = [1,2,34,5,6]
// console.log(arr)


// const arr2 = new Array(1,2,3,4)// no nee dto put the array bracket
// console.log(arr2)
// console.log(arr2[0])


// //USING ARRAY MEATHODS

// arr2.push(6)
// console.log(arr2)

// arr2.pop()


// /// now adding the elments in the front of the array and deleating

// arr2.unshift(10)
// console.log(arr2)
// // now deleating the array2 first elements

// arr2.shift()
// console.log(arr2)


// console.log(arr2.includes(798))
// console.log(arr2.indexOf(3))

// const a = arr2.join()
// console.log(arr2)
// console.log(a)//-> converted to the string

 

//DIFFERENCE BTW SPLICE AND THE SLICE
const ar = [1,2,3,4,5,6,7,8]
console.log("original",ar)

const m1 = ar.slice(1,3)// 3 is the upper bound
console.log("sliced array", m1)
console.log("original",ar)

const m2 = ar.splice(1,3)
console.log("spliced array" , m2)
console.log("original",ar)

