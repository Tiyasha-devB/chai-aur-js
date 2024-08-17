// const score = 400
// console.log(score); //auto detects as a number

// //toString(), toFixed(...)
// const bal = new Number(100)
// console.log(bal); //object type is number(explicit typecasting)
// console.log(typeof bal.toString()); //converts no. to string
// console.log(bal.toString().length); //lenth of string
// console.log(bal.toFixed(2)); //used to reduce or round of specific decimal values

// //toPrecision(...)
// const bal2 = 23.896677
// console.log(bal2.toPrecision(3)); //focuses on only 3 nos. o/p = 23.9
// const bal3 = 123.896677
// console.log(bal3.toPrecision(3)) //o/p = 124

// //toLocaleString(..standard formats..)
// const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'));

// //other methods for NUMBER
// console.log(Number.MAX_VALUE) //1.7976931348623157e+308
// console.log(Number.MIN_VALUE) //5e-324
// console.log(Number.NEGATIVE_INFINITY);




// console.log(Math);
// console.log(Math.abs(-47)); //47
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.9)); //4
console.log(Math.random());  //random values between 0 and 1
console.log(Math.ceil(Math.random()*10)) // values btn 1-10

min=10
max=30
console.log(Math.ceil(Math.random() * (max-min)) + min) //values btn 11-30








