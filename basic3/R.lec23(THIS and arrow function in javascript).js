const user = {
    username :"nilesh",
    price : 0,
    welcome: function(){
        console.log(`${this.username}, welcome to this website`)
        // console.log(this)
    }
}

user.welcome()
user.username = "sam"

user.welcome()
console.log(this)// this is givein gth emepty object

function chai(){
    let username = "nilesh"
    console.log(this.username)// this cannot be accessed  > giving undefined
}

chai()

const chai = function(){// normal function
    let username = "nilesh"
    console.log(this.username)
}

const chai = () => {// inplecit function
    let username = "nieslh"
    console.log(this)
}
// normal function me this use hota hai and bakio me nahi hoata hai
chai()

const addTwo = (num1, num2) => {// explacit function
    return num1 + num2
}

const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})/// actual way of retrival//-> implecit function


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()