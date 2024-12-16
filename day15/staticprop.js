class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    static createID(){ //access blocked
        const uni_id = Math.ceil(Math.random()*10)
        console.log(`Ur unique id will be ${uni_id}`);
        
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
// const username = prompt("Please enter your username:");
// const username = "Tiyasha"
// const user = new User(username);
// user.logMe()
// user.createID();
const user2 = new Teacher("Hitesh", "hitesh678@gmail.com")
user2.logMe()
//user2.createID()