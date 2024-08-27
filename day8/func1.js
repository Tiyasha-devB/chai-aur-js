function add2nos(n1,n2) {
    return n1 + n2
    //let result = n1 + n2
    //return result
}



const result = add2nos(2,4)
console.log("result: ", result);

function loginmssg(username){
    if (!username) //if empty
        console.log("Please enter username.");
    else  
        return `${username} just logged in.`;
}
console.log(loginmssg()) //undefined if no arg is passed




//1.Array with function: rest operator(...var_name)
function CalCartPrice(val1, ...num1) { 
    return num1;
    
}
console.log(CalCartPrice(200,400,600,200)) //o/p - val1: 200, ...num1: [ 400, 600, 200 ]

//2. 
function getVal(anyArr){
    return anyArr[0]; //200
}
console.log(getVal([200,400,600,700]));




//objects with function
const user = {
    name: "tiyasha",
    price: 199,
}
function handleObject(anyObj){
    console.log(`Username is ${anyObj.name} with price ${anyObj.price}`);
    
}
//handleObject(user)
//OR
handleObject({
    name: "Sam",
    price: 399
})