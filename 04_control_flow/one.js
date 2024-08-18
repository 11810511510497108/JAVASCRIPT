// if - statement

// const temprature = 41;

// if (temprature === 41) {
//     console.log(`Temprature is less than ${temprature}`);
// } else {
//     console.log(`temprature is more than ${temprature}`);
// }

// const score =  200;

// if(score > 100) {
//     const power = "fly";
//     console.log(`user power: ${power}`);
// }

// console.log(`user power : ${power}`);

const balance = 2000;
// implicit scope
//if(balance > 500) console.log(`balance is suficient`);

const loggedInFromGoogle =  false;
const loggedInFromEmail = true;
 
// if(loggedInFromEmail && loggedInFromGoogle) {
//     console.log(`user logged in`);
// }

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log(`user logged in`);
}

// nullish coalescing operator (??): null undefined

let val1;

//val1= 5 ?? 10;             // 5
//val1= null ?? 10;          // 10
//val1= undefined ?? 10;     // 10
//val1= null ?? undefined;   // undefines
val1= undefined ?? null;     //null

//console.log(val1);

// Terniary Operator

//condition ? true : false;

const teaPrice = 6;

teaPrice >=5 ? console.log(`Tea is supper !`) : console.log(`Tea is bad`);