//promise object represents the EVENTUAL COMPLETION of an asynchronous operation and its resulting value
const promiseOne = new Promise(function(resolve,reject){
    //Do an async calls
    //DB calls, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve() //its a method connecting with then of promise2
    }, 1000);
}) //object instance creates

promiseOne.then(() => {
    console.log("Promise consumed");
    
})

//2
new Promise((resolve,reject) => {

    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 2000);

}).then(()=>{
    console.log("Async 2 resolved");
    
})

//3
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
    resolve({username: "Tiya", email: "chaioup@gmail.com"})  
    }, 3000);
})

promiseThree.then(function(user){
    console.log(user);
    
})

//4.then, .catch, .finally
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false; //error nullified
        if (!error){
            resolve({username: 'hitesh', password: '123b4'})
        } else {
            reject('Error: Something went wrong')
        }
    }, 4000);
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => { //chaining takes tthe previous returning value
    console.log(username);
})
.catch((error) => {
    console.log(error); 
})
.finally(() => console.log('The promise is resolved or rejected'))

//5. async await
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true; //error
        if (!error){
            resolve({username: 'js', password: '1097dr'})
        } else {
            reject('Error: JS went wrong')
        }
    }, 4000);
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive //object hain toh promiseFive() nhi likhte
        console.log(response);
    
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive();