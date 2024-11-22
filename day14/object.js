function multby5(num){
        return num*5
}
console.log(multby5(5));
console.log(multby5.power = 2);
console.log(multby5.prototype); //{} -> this context + prototypes
//function behaves as a object

function createUser(username, score){
    this.username = username
    this.score = score
}
//self made functions:
createUser.prototype.increment = function(){
    return this.score++; //current context
}

const chai = new createUser("chai",25)
console.log(chai);
const tea = new createUser("tea",76)
console.log(tea);
