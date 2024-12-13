// primitive - String, number, boolean, null, undefined, BigInt, symbol(7)

const id = Symbol('123')
const id2 = Symbol('123')
console.log(id == id2); 
// In JavaScript, Symbols are unique identifiers. 
// Even if they're created with the same description, they represent different objects in memory. 
// This is why comparing two Symbols with the same description using == will always result in false.


// non-primitive - array, objects, functions
const array1 = ["tiyasha","tanbir","tamanna","trisha"] //array object 
const obj1 = {
    name: "tiyasha",
    age: 22,
    dept: "bca"
}
const func1 = function(){
    console.log("Hello World");
    
}
console.log(typeof func1); // function object


