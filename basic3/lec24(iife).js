// immediately invoked function expression(IIFE)
(
function cahi(){
    //named iife
    console.log(`DB CONNECTED`)
})();
// this was similar to the chai(...here we can pass the case...)

((name ) => {  // arrow funtion is like a unnemed function
    console.log(`DB CONNECTED EVU ${name}`)
})(`nilesh`)