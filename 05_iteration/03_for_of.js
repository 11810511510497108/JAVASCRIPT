
// High Order Arrays Loops

// 1).  for of

// [" ", " ", " "] Array with Sting value

// [{}, {}, {}] Array with object

const myArr = [1, 2, 3, 4, 5];

// for(const num of myArr) {
//     console.log(num);
// }


const greetings = "Hello vishal";

// for(const greet of greetings) {
//     if(greet == " "){
//         continue;
//     }
//     console.log(`${greet}`);
// }


// ------------- Map() --------------

// map() is a object that holds a key-value pairs
// map are store unique value not repeat||\

const map = new Map();

map.set("IN", "India");
map.set("USA", "United state of America");
map.set("Fr", "Franch");
map.set("IN", "India");
map.set("HT", "Hindustan");

//console.log(map);

for(const [key, value] of map) {
    console.log(`Name of country ${key}, :- ${value}`);
}