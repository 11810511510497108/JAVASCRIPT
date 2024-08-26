// map() -- method

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNums = myNum.map( (num) => { return num+10});

// chainning method
const newNumber = myNum
                      .map( (num) => num * 10)
                      .map( (num) => num+1)
                      .filter( (num) => num%3 == 0);
console.log(newNumber);