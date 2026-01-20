// if obj is formed using the literals then the obj is not sinngleton

// if the obj is formed using the constructors .. the the obj is frmoed is singletom


///using only the singleton

/// vepy very important for the interview prespec

const mysym = Symbol("key1");



const juser = {
    name : "NILESH", 
    "full name" : "NILESH KUAMAR SETH",
    age : 19,
    [mysym] : "this value is printing",
    location : "dhanbad",
    email: "nilesh@gmail.com",
    logged : false,
    lastlogin : ["monday", "tuesday"] 
}
console.log(juser.name)//this is the first meathod
console.log(juser["email"])// this can be liked with  array use...i.e refering the index..
console.log(juser["full name"])//.. we cannot write like juser.full name/// therefore we need to learn both the techniques
console.log(juser[mysym])
//......................................................................................
// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
