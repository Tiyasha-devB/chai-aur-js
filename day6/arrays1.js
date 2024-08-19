// Array
const arr =[1,2,3,4,5,true,"hitesh"];
const names = new Array("tiyasha","trisha","tamanna","tanbir");
names.push("sayantani"); // adds ele at last
//names.pop() //removes ele from last
names.unshift(90) //  adds elements in the first and shifts the others
// names.shift() removes ele from first
console.log(names.includes("trayani")); //false
console.log(names.indexOf(9)); //-1

console.log(names); //array object
const newNames = names.join();
console.log(newNames); //string type



//SPLICE AND SLICE:
const newArr = [1,2,3,4,5,6]
console.log("\nA", newArr); //original array
console.log("B", newArr.slice(1,4)) //creates a new array containing the portion of org
console.log("C", newArr.splice(1,4)) //creates a new array with removed elements if any
console.log(newArr); //the original array is modified by splicing





