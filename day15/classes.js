class User {
    constructor(username, email, passwd){
        this.username = username;
        this.email = email;
        this.passwd = passwd
    }
    encryptPassword(){
        return `${this.passwd}XXX`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User ("chai", "cahi@gamil.com", "123abx")
console.log(chai.encryptPassword());
console.log(chai.changeUsername())

//er age amra user er moddhe property inject korar jonno .prototype diye kortam.. akhon amra encapsulate kore dicchi
