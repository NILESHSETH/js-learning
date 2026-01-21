function add(num1 , num2){
     return (num1+num2)
}
const a = add(3,4)
console.log(a)

// understanding the return fruction

// function login(username){
//     return  `${username} just loggined`
// }

// console.log(login("nilesh"))

/// vvvvi if the value id not given then the the output will be undefined


// function login(username){
//     return  `${username} just loggined`
// }

// console.log(login())

function login(username = "sam"){
    if(!username) {
        console.log("user name undefined.. please neter a valid user name")
        return
    }
    return  `${username} just loggined`
}

console.log(login("iuegr"))