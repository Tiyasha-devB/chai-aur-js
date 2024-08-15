// primitive - String, number, boolean, null, undefined, BigInt, symbol(7)

const id = Symbol('123')
const id2 = Symbol('123')
console.log(id == id2); // false as the value changes

// non-primitive - array, objects, functions
const array1 = ["tiyasha","tanbir","tamanna","trisha"] //object
const obj1 = {
    name: "tiyasha",
    age: 22,
    dept: "bca"
}
const func1 = function(){
    console.log("Hello World");
    
}
console.log(typeof func1); // function object


