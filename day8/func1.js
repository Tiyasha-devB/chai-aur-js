function add2nos(n1,n2) {
    return n1 + n2
    //let result = n1 + n2
    //return result
}

const result = add2nos(2,4)
console.log("result: ", result);

function loginmssg(username){
    if (!username) //if empty
        console.log("Please enter username.");
    else  
        return `${username} just logged in.`;
}
console.log(loginmssg()) //undefined if no arg is passed