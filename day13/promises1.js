// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') //network request
//     const data = await response.json() // conversion takes time
//     console.log(data);
//     } catch (error) {
//         console.log("e: ", error);
        
//     }
    
// }
// getAllUsers();

//
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data)=> console.log(data))
.catch((error) => console.log(error))
