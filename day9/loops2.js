/*array specific loops:  for in
 for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
 }*/
const myobj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby'
}
for (const key in myobj){
    console.log(key); //only keys will be printed
    console.log(myobj[key]); //keys will be printed    
}


/* for of
for (const element of object) {
    
}
*/
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
    
}

const greet = "Hello World Sky"
for(const val of greet) {

    if (val == ' '){
        continue;
    }
    console.log(val); //skips spaces
    
}


/* for each //value index and list parameters
array.forEach(element => {
    
});*/
const marvel = ["thor","ironman","spiderman","superman"]
marvel.forEach( function (item) {
    console.log(item);
})
//function reference
function greetings(val){
    console.log(val);
}
marvel.forEach(greetings)
//arrow
marvel.forEach( (val, index, arr) =>{
    console.log(val, " ", index, " ", arr);
    
})

const coding = [
    {
        langName: "JavaScript",
        langFName: ".js"
    },
    {
        langName: "Java",
        langFName: ".java"
    },
    {
        langName: "Python",
        langFName: ".py"
    }
]
coding.forEach( (val) => {
    console.log(`Extension of language ${val.langName} is ${val.langFName}`);
    
})

//maps - unique values
const map = new Map()
{map.set('IN', 'Delhi')
map.set('USA', 'America')
map.set('KOR', "Seoul")}
console.log(map);

for (const key of map) {
    console.log(key); //prints the whole array with key value pairs
}
for (const [key] of map) {
    console.log(key); //prints only keys
}
for (const [key, val] of map) {
    console.log(key, ' ', val); //prints key value pairs separated by ' ' 
}
//objects will not be iterated with for of


