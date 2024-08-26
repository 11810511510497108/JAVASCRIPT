// reduce() - method

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// reduce with normal function

// const totalSum = myNum.reduce( function(acc, currval) {
//     console.log(`acc val is : ${acc} + currval is : ${currval}`);
//   return acc + currval;
// },0);

// console.log(totalSum);

//.  reduce with Arrow function

const totalSum = myNum.reduce( (acc, currval) => (acc + currval),0);

//console.log(totalSum);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "java course",
        price: 5599
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "DSA course",
        price: 12000
    },
    {
        itemName: "web developement course",
        price: 7500
    },
]

const totalPriceofCourse = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(totalPriceofCourse);