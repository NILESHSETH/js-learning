/// usage of rest operator

// function calculator(...num1){//... this is only called the rest and the spread operator
//     return num1
// }
// console.log(calculator(200,300,4000))


function calculator(val1,val2,...num1){
    return num1
}
console.log(calculator(200,300,4000,4543))


