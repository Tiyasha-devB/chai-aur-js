const user = {
    name : "tiyasha",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got data" + this.name); //this is used for the execution context to understand which "name" is being referred
        console.log(this); //current context
        
    }
}
console.log(user.getUserDetails());
console.log(user.name);
//OBJECT LITERAL
//console.log(this) //{} bu in  browser we get window object

//CONSTRUCTOR
const date = new Date()
console.log(date.toDateString());

function user1 (username, loginCount){
    this.username = username;
    this.loginCount = loginCount;

    return this //implicitly defined.
}

// const userOne = user("hitrsh",5); overwrites if no new is mentioned
const userOne = new user1("hitesh",8);
const userTwo = new user1("tiyasa",9); //new instances are created so each copy will be maintained separartely

console.log(userOne);
console.log(userTwo.constructor); //reference to own

