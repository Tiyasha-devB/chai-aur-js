const user = {
    username: "Tiyasha",
    price: 999,

    welcomeMssg: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this)
        /*{
            username: 'Tiyasha',
            price: 999,
            welcomeMssg: [Function: welcomeMssg]
        } CURRENT context*/ 
    }
    
}
user.welcomeMssg();
// user.username = "Hitesh"
// user.welcomeMssg();
console.log(this); // empty node; but if this is run in browser it'll show an window object




//==================================================ARROW FUNCTION================================================
function chai(params) {
    console.log(this);
    /* not applicable
    const user = "Tiyasha"
    connsole.log(this.user)
    **/
}
chai()

const chai2 = () => {
    console.log(this); // empty node
}
chai2()

const addNos = (n1,n2) => n1+n2 //implicit return {}-return is need else not needed
console.log(addNos(5,3));

const myarr = [2,4,5,8]
myarr.forEach()