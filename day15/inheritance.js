class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email,passwd){
        super(username) //this .call() dorkar nei, shob automatic

        this.email = email
        this.passwd = passwd
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}
const chai = new Teacher("chai", "chai@gmail.com", "123")
chai.addCourse()
chai.logMe()

const chai2 = new User("chai2", "chai@gmail.com", "123")
// chai2.addCourse() // not accessible cause its parent class

console.log(chai === chai2); // not 
console.log(chai instanceof Teacher); // yes, inherited
console.log(chai2 instanceof Teacher); // no


