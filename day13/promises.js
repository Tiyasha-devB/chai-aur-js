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

new Promise((resolve,reject) => {

    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);

}).then(()=>{
    console.log("Async 2 resolved");
    
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
    resolve({username: "Tiya", email: "chaioup@gmail.com"})  
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
    
})