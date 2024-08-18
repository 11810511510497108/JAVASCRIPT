

function sayMyName() {
   console.log("v");
   console.log("i");
   console.log("s");
   console.log("h");
   console.log("a");
   console.log("l");
}

//sayMyName(); 

// function addTwoNumber(num1, num2) {
//     console.log(num1+num2);
// }

// addTwoNumber(2,3);

function addTwoNumber(num1, num2) {
   // console.log(num1+num2);
    return num1 + num2;
}

const result = addTwoNumber(2,3);
//console.log("result : ", result);

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

//console.log(calculateCartPrice(200, 3300, 500, 1000));

//************ * How to pass object in function * *******

const user = {
    userName: "vishal",
    age: 23,
}

function passObjectInFunction(userInfo) {
    console.log(`Username is ${userInfo.userName} and age is ${userInfo.age}`);
}

//passObjectInFunction(user);

passObjectInFunction({
    userName: "vishal Patidar",
    age:24,
})

// ****************** How to pass Array in functions ******

const myArray = [200, 300, 400, 500];

function passArrayInFunction(anyArray) {
    return (anyArray[3]);
}

console.log(passArrayInFunction(myArray));