// Immediately invoked function expressions(IIFE)
/*uses a lexical  scoping to get rid of any global scope pollution in a function by creating an encapsulated own scope,
or if we want any function to get immediately executed.
*/
// NORMAL EXECUTION
function chai(){
    console.log("DB Connected");
}
chai();

//NAMED IIFE EXECUTION
(function chai2(){
    console.log("DB CONNECTED 2");
    
})(); //add semi-colon to end the context(EXPLICIT)

//ARROW IIFE
( (name) => {
    console.log(`DB CONNECTED 3, ${name}`);
})('tiya');