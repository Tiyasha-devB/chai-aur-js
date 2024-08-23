const marvel = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

/*PUSH AND CONCAT
marvel.push(dc); //takes the 2nd array as 1 element (pushes value in existing array)
marvel.concat(dc);
console.log(marvel);
console.log(marvel[3][1]);
*/
const newArr = marvel.concat(dc); //returns new array with 2 combined arrays without modifying the original array
console.log(newArr);

//SPREAD OPERATOR
const newArr2 = [...marvel, ...dc]
console.log(newArr2);

//FLAT
const newArr3 = [1,2,3,[4,5,6,7],8,[9,10,[11,12]]]
console.log(newArr3.flat(Infinity));

// Object/iterable -> Array
console.log(Array.isArray("TIYASHA")); //FALSE
const studentDetails = {
    firstName: "Tiyasha",
    rollNumber: 13,
    subject1: "Maths",
    subject2: "Computer Science"
  };
  console.log(Array.from(Object.keys(studentDetails)));
  console.log(Array.from(Object.values(studentDetails))); //values of object in array
  console.log(Array.from(Object.entries(studentDetails)));

