// There are two type of object are created
//  1). Literals
// 2).  constructor

// Singleton => 

    // when object are by the constructor than create singleton and literal create object than not 
    // create singleton

// Object Literals

const mmysym = Symbol("mykey1");

const jsUser =  {
    name: " vishal",
    age: 23,
    mysym: "mykey1",
    location: "Indore",
    "email": "vishal@google.com",
    isLoggedIn: false,
}

//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser["mysym"]);

jsUser.email = "vishal@microsoft.com";
//console.log(jsUser);

jsUser.age = 22;
//Object.freeze(jsUser);
jsUser.email = "vishal@chatgpt.com";

//console.log(jsUser);

jsUser.greeting = function() {
    console.log(`hello js user`);
}
jsUser.greetingTwo = function() {
    console.log(`hello js js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());