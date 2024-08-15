console.log("2">1); //converts into number
console.log("02">1); //treats "02" as 2
console.log(2=="02"); //true


console.log(null == 0); //false
console.log(null > 0); // false(0 not gt than 0)
console.log(null >= 0); //true 
console.log(null >= []) //true
console.log(null == []) //false
/** equity operator == and comparisons like > <, >=,<= work differently
 * the comparison operator converts null into a number 0 while == doesn't
 */

console.log(undefined == 0); //always false

// '===' checks strictly i.e. checks the data type as well as value
console.log( "2" === 2); //false



