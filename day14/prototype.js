let myName = "tiyasha   "
console.log(myName.trim().length);

// method: (anyString.truelength); by default for evey string


let anotherUsName = 'ChaiAurCode               '
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}
anotherUsName.trueLength()
"Tiyasha   ".trueLength()


let myHeroes = ["thor","spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpideePower: function(){
        console.log(`spidy power is: ${this.spiderman}`);
        
    }
}
Object.prototype.tiyasha = function(){
    console.log("Hitesh is present in all objects");
    
}
heroPower.tiyasha() //accessible by inserting a prototypal function to top hierchical OBJECT
myHeroes.tiyasha() //shobar moddhe chole esche property jehetu object e define korechi.

//kintu jodi amra shudhu array te kori...
Array.prototype.hiTiya = function(){
    console.log("Hi Tiyasha");
    
} 
myHeroes.hiTiya() //array te hobe
//heroPower.hiTiya() //object e hobena

//pROTOTYPAL INHERITANCE

const user = {
    name: "Tiya",
    email: "chai@iem.com" 
}
const teacher = {
    makeVideo: true
}
const teachingSupport = {
    given: false
}
const TASupport = {
    makeAssg: 'Js Assignment',
    fullTime: true,
    __proto__: teachingSupport //inheritance
}
teacher.__proto__ = user // old
Object.setPrototypeOf(teacher, user)  //mordern