// for-in loop

// for in loop used with object

const language = {
    js: "javascript",
    cpp: "c++",
    sql: "structured quary language",
    html: "hypertext markup language",
    css: "caststyle sheet",
    java: "java",
}

//console.log(language);

// for(const key in language) {
//     console.log(key);
// }

for(const key in language) {
    console.log(`${key} for shortcut :- ${language[key]}`);
}