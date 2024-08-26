//for-Each() loop

const coding = ["c++", "java", "js", "css", "html", "ruby"];

// coding.forEach( function(val) {
//     console.log(val);
// })

// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item, index, list) => {
//     console.log(item, index, list);
// })


const programming = [
    {
        language: "java",
        folder: "java",
    },
    {
        language: "javascript",
        folder: "js",
    },
    {
        language: "c++",
        folder: "cpp",
    },
    {
        language: "python",
        folder: "py",
    }
]

programming.forEach((item) => {
    console.log(item.language);
})