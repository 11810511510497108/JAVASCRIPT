
/*  (Primitive)  

There are 7 types 
1. String:
2. Number:
3. null:
4. undefined:
5. Boolean:
6. BigInt:
7. symbol:
*/

const num = 123;
//console.log(typeof num); // number

const myName = "vishal";
//console.log(typeof myName); // string

const outSideTemp = null;
//console.log(typeof outSideTemp);  // object

let userEmail;
//console.log(typeof userEmail); // undefined

const bigNumber =  91827364519283n;
//console.log(typeof bigNumber); // bigint

/*
 Non-Primitive Data type (Reference)

1. Array:
2. Objects:
3. Functions

*/

const car = ["marsedies","BMW","Venue","fararri","Creta"];
//console.log(car);   //.  [ 'marsedies', 'BMW', 'Venue', 'fararri', 'Creta' ]
//console.log(typeof car);  // object

const obj = {
     name : "vishal",
     age: 23,

}
//console.log(obj); // { name: 'vishal', age: 23 }
//console.log(typeof obj); // object

const myFunction = function() {
  //  console.log("hello vishal");

}

//console.log(myFunction); //. [Function: myFunction]
//console.log(typeof myFunction); //. functiont

//************************************** */

//Stack( primitiv ) - Haep (non-primitive)

let myYoutubName = "vishalptdr";

let anotherName = myYoutubName; 
anotherName = "chaiaurcode";

console.log(myYoutubName);
console.log(anotherName);

let userOne = {
  email: "vish@google.com",
  upi: "user@ybl",
}

console.log(userOne);












