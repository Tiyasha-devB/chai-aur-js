// control oor logoc flow: if-else
const isUserLoggedIn = true
let temperature = 41

if(temperature < 50){
    console.log("Less than 50");
} else {
    console.log("More than 50"); 
}

/* COMPARISON OP: <, >, <=, >=, ==, !=, ===(type check), !== **/


//if-else-if
const bal = 100

if (bal < 50) {
    console.log("Less than 50");
} else if(bal >= 50 && bal < 200) {
    console.log("Greater than 50 less than 200");
} else {
    console.log("greater than 200");
}

//Switch-case
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

month = 0.12
switch (month) {
    case 0.1:
        console.log("January");
        break;
    case 0.2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;

    default: console.log("Wrong!")
        break;
}



//Truthy values: function(){}
// Falsy values: false, 0/ -0, 0n(bigInt), "", null, undefined, NaN
const user = {}
if  (!user) { //!truthy
    console.log("Got user");
} else {
    console.log("No user");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Empty object");
}