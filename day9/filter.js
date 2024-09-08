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