console.log(Object.getOwnPropertyDescriptor(Math, "PI")); //hidden propert of object

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,
    orderChai: function () {
        console.log("Chai nhi bni");
        
    }
}
//viwing property of our object
console.log(Object.getOwnPropertyDescriptor(chai, "name"));


//changing properties of our object
Object.defineProperty(chai, 'name', {
    enumerable: false //name property e iterate korte parbena
})
for (let [key,value] of Object.entries(chai)) {

    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    
}

