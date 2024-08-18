// (iife) => Immediatly Invoked Function Expression

(function chai() {
    console.log(`Chai mil gai`);
})();
//chai();


// Global scope ke polution se problem hoti hai kai bar isliye Global scope ke 
// variable or declaration ko hatane ke liye IIFE ka use kiya jata hai
(function chai() {
    // name iife
    console.log(`Chai pi li`);
})();

(  (name) => {
    console.log(`${name}, aur chai chiye`);
})("vishal")