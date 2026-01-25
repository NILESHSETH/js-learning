const email = []

if(email){// this email is assumed to be true..and this is the truthy value 
    console.log("got the user emaill")
}
else{
    console.log("dont have eamil")
}

// falsy value

//false,0.,-0,Bigint On, "", null, undefined, NaN

// truthy value
// "0", "false", " ", [], {}, function(){}

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("the obj is empty")
}


// NULLISH COALIESCING OPERATOR(??) : NULL UNDEFIENED


let val1;
// val1 = 5?? 10
val1 = undefined ?? 10
// val1 = null?? 10

/// this nullesece is help us to remove the error when we use to face the error value and the undefined value type error..
// if there is non null or undefined val then we will get the value which is next or we can say that is fist to the ?? from left to right// imp
console.log(val1)


//this is deifferent to the ternary operator

const price = 82390
price <= 2390? console.log("the price is less than 5000") : console.log("this is greater")


