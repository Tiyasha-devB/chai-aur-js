const name = "Tiyasha"
const repoCount = 50

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('tiyasha'); //declaration
console.log(gameName[0]);
console.log(typeof gameName); //object
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));
console.log(gameName.substring(0,4).toUpperCase())
console.log(gameName.slice(-8,4)); //can take negative index
console.log(gameName);

const url = "https://tiyasha.login/tiyasha%20banerjee"
console.log(url.replace("%20","-"));
console.log(url.includes("%20"));

console.log(url.split("/")); //[ 'https:', '', 'tiyasha.login', 'tiyasha%20banerjee' ]




