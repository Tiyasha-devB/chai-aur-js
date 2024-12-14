// jodi function er bhetor arrek function call thake tahle call stack e tar alada execution context toh jurbe
// but problem hobe EC te browser context e karon 'this' refer korche window object ke but
// node environment e {} refer korbe

function setUsername(username){
    this.username = username
    console.log("called");
    
}
function createUser(username,email,passwd){
    //setUsername(username) //call hocche but kaaj na, reference deowa just
    setUsername.call(this, username) //explicitly called because we want to hold its reference
    //this is passing in the reference before its EC ends
    this.email = email
    this.passwd = passwd
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
