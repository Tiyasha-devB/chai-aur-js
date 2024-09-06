/*array specific loops:  for in
 for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
 }*/


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

/* for each
array.forEach(element => {
    
});*/

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
