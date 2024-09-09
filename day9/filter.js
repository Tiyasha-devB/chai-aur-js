//filter - Extracts elements from an array based on a specified condition. Returns new array
const mynums = [1,2,3,4,5,6,7]
const newnums = mynums.filter( (num) => num > 4) //returns the value satisfying the condition
//OR
const newnums2 = mynums.filter( (items) => {
    return items > 4
})
console.log(newnums);
console.log(newnums2);

// if you want to use for each

const newNums  = []
mynums.forEach( (items) => {
    if (items > 4){
        newNums.push(items)
    }
})

// let userbooks = books.filter ( (bk) => {
//     return bk.genre === 'History' && bk.genre >= 1995
// })
// console.log(userbooks);


//map - Creates a new array by transforming each element of the original array using a callback function.
const mynum = [1,2,3,4,5,6,7,9,10]
const new10 = mynum.map( (items) => { //return 
    return items+10
})
console.log(new10);
//chaining
const fun_chaining = mynum.map( (num) => num * 10)
                        .map((num) => num + 1)
                        .filter((num) => num>40)
console.log(fun_chaining);


//reduce
const arr1 = [1,2,3,4,5]
const inival = 0
const val = arr1.reduce((acc,item) => acc+item, inival)
console.log(val);
