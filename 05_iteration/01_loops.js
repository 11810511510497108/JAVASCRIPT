// for loop 

for (let i = 0; i <=10; i++) {
    const element = i;
    //console.log(element);
}

// nexted loop

// for (let i = 0; i <= 10; i++) {
//     //console.log(`i am outer loop ${i}`);
//     for (let j = 0; j <= 10; j++) {
//        //console.log(`i am inner loop ${j}, and outer loop ${i}`);
//        console.log(i+j);
//     }
//     console.log(i);
    
// }

const myArray = ["flash","batman","superman"];
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

for (let i = 0; i < 20; i++) {
    if(i == 5) {
        console.log(`detected i ${i}`);
        continue;
    }
    console.log(`value of i is ${i}`);
    
}