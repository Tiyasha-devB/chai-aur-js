const accId = "ty321" /*Values can''t be changed/
let accName = "Tiyasha" /**uses scope validation */
var accPw = 45678 /**no block-scope validations */
accCity = "Jaipur" 
let accState; /**Undefined */

// accId = "t543" CHANGING CONST NOT ALLOWED

accName = "Tanbir"
console.log(accName)
accPw = "76D43"
console.log(accPw)
accCity = "Kolkata"
console.log(accCity)

console.table([accId,accName,accPw,accCity,accState])