// Stack Memory: Primitive Data Types(7)
let myYoutubeName = "hiteshchoudharydotcom"
let anothername = myYoutubeName
anothername = "chaiaurcode"

console.log(myYoutubeName) //hiteshchoudharydotcom (no changes in original)
console.log(anothername) // chaiaurcode

// Heap Memory: Non Primitive Data Types()
 
let userOne = {
    email: "user@google.com",
    upi: "user@ybl.com"
}
let userTwo = userOne;
userTwo.email = "hitesh@google.com"

console.log(userOne)//changes will be reflected back to original
console.log(userTwo)//changes here
