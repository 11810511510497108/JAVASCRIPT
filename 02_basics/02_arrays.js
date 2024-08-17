const cars = ["BMW","venue","ferrari"];

const bike = ["bullet","heroes","pulsar"];

console.log(cars);

console.log(bike);

// cars.push(bike);
// console.log(cars);

let newCars = cars.concat(bike);

//console.log(newCars);

let merge = [...cars , ...bike];
//console.log(merge);;

console.log(Array.isArray("vishal"));
console.log(Array.from("vishal"));

console.log(Array.from({name: "vishal"}));// return the empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

// Array.isArray =>. the Array,isArray() static method dertermine whether the passed value in the array

// Array.from() =>. the Array.from() static method create a new shallow-colpied Array instance from an iterable 
//                  or Array like object

// Array.of() =>  the Array.of() static method create a new Array instabnce from a variable number of argumennts 
//.               regardless of number of type of the arguments;

