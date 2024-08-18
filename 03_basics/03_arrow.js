// Arrow functions. 


const user = {
    userName: "vishal patidar",
    age: 23,

    userInfo: function() {
        console.log(`user name is: ${this.userName}, and age is : ${this.age}`);
        console.log(this);
    }
}

// user.userInfo();
// user.userName = "vishal patidar suman";
//user.userInfo();

//console.log(this);

const chai = () => {
    let userName = "vishal patidar";
    //console.log(this.userName);
}

//chai();

// const addNumber = (num1, num2) => {
//     return num1 + num2;
// }

//console.log(addNumber(2, 5));

//const addTwoNumber = (num1, num2) =>  num1 + num2;

//const addTwoNumber = (num1, num2) =>  (num1 + num2);


const addTwoNumber = () =>  ({userName: "vishal"});

console.log(addTwoNumber());