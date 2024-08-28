//scope : function, global,
//global scope
var c = 300
if (true)
{
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("Inner: ",a);
    
} //block scope

// console.log(a); THROWS ERROR AS OUTSIDE SCOPE
// console.log(b); THROWS ERROR AS OUTSIDE SCOPE
console.log(c); //conflict



//NESTED SCOPE:
function one(params) {
    const name = "tiyasha";

    function two(){
        const web =  "github";
        console.log(name); 
    }
    //console.log(web); outside scope of func 25(ERRoR)
    
    two()
}
// two() function two is not accessible outside one()
one()




//cannot call the function before initialization as we do in norrmal functions
const addTwo = function(num){
    return num + "2"
}
console.log(addTwo(5))

// console.log("3" + + 3 - "3");

    
