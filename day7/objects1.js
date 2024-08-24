// singleton
//Object.create - using constructors

//object literals
//declare a symbol: 
const mySym = Symbol("key1")

const user = {
    name: "Tiyasha",
    age: 18,
    [mySym]: "mykey1", //defining the symbol (use [] else it'd be reff as string)
    location: "Jaipur",
    "emailId": "tiya@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
console.log(user.location);
console.log(user["emailId"]);
console.log(user[mySym]); //symbol 
console.log(user["name"]);

user.emailId = "tiya@chatgpt"; //changing values
//console.log(user["emailId"]);

//Object.freeze(user) //object is freezed cannot mutate changes
//user.emailId = "tri@chatgpt";
//console.log(user);

user.greeting = function() {
    console.log(`Hello JS User, ${this.name}`); //referring to the currently calling object(user)  
}
console.log(user.greeting());

