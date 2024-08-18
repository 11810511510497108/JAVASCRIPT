//const userEmail = "visha@google.com";
//const userEmail = "";
const userEmail = [];

if(userEmail) {
    console.log(`Got user Email`);
} else {
    console.log(`Don't have user email`)
}

// falsy value

// false, 0, -0, BigInt 0n, null, undefined, NaN

// truthy value

// "0", 'false', " ", [], {},  function(){} 


const arr = [];

if(arr.length === 0) {
    console.log(" Array is Empty");
}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}