const tinderUser = new Object() //singleton object
tinderUser.id = "abcd1"
tinderUser.name = "Sam"
tinderUser.age = 18
tinderUser.isLoggedIn = {
    day: true,
    night: false
}

console.log(tinderUser);
console.log(tinderUser.isLoggedIn.day)
console.log(Object.keys(tinderUser));   //keys as an array
console.log(Object.entries(tinderUser));    //key-value pair

// OBJECT LITERALS
const regUser = {
    email: "some@email.com",
    fullName: {
        firstName : "Sammy",
        lastName: "Ghosh"
    }
}
//console.log(regUser);
//console.log(regUser.fullName.firstName);

//MERGING VALUES
const obj1 = {"a":1, "b":2}
const obj2 = {"c":1, "d":2}
//const obj3 = obj1+obj2 //merging DOESNT HAPPEN LIKE THIS; cannot use concat//

//const obj3 = {...obj1,...obj2} // spread operator
const obj3 = Object.assign({},obj1,obj2) //target = {}, source = obj1 & obj2
console.log(obj3);

//ARRAY OF OBJECTS: DB
const dbUsers = [
    {
        id: "db1",
        name: "trisha"
    },
    {
        id: "db2",
        name: "tiyasha"
    },
    {
        id: "db3",
        name: "tanbir"
    }
]
console.log(dbUsers[1]["name"]); //dbUsers[1].name(same)

