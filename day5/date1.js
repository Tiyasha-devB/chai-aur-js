//Date: it is an object in js
let time = new Date()
console.log(time.toString());
console.log(time.toDateString());
console.log(time.toLocaleString()); //8/19/2024, 2:18:01 PM
console.log(time.toISOString());
console.log(time.toJSON());

let createdDate = new Date(2024,7,22,5,6)
console.log(createdDate.toDateString());
 
let timeStamp = Date.now() //used to get exact time an user has submitted a form or polls(in ms)
console.log(timeStamp); //in miliseconds
console.log((createdDate.getTime())); //in ms


// customization of to localeString

let newDate = new Date()
newDate.toLocaleString('default',{
    weekday: "long"
})
console.log(newDate);


