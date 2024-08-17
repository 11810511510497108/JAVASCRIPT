const tinderUser = new Object("vishal");

//const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "vish";
tinderUser.email = "vish@google.com";
 //console.log(tinderUser);

const regularUser = {
    email: "vishal@google.com",
    fullName: {
        firstName: "vishal",
        lastName: "patidar",
        userInfo: {
            gender: "male",
            age: 23,
            degree: "BTec-CSE",
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userInfo);

//console.log(regularUser.fullName.userInfo.degree);

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};

// console.log(obj1);
// console.log(obj2);

//const obj3 = {obj1, obj2};

//const obj3 = Object.assign({}, obj1, obj2); // this is best but use case is less

//const obj3 = {...obj1, ...obj2}; // this is very more usefull 

//console.log(obj3);


// Object.assign() => The Object.assign() static method copies all enumerable own properties from one or 
// more source objects to a target object. It returns the modified target object.

// Object.keys() =>
// Object.values() =>
// Object.entries() =>

//console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('age'));
// console.log(tinderUser.hasOwnProperty('email'));


//.--------De-Structuring---------
const course = {
    courseName: "js in hindi",
    coursePrice: "999",
    courseInstructor: "hitesh",
    courseTakeOver: "vishal",
}

console.log(course);
console.log(course.courseTakeOver);

const {courseTakeOver: purches} = course;
console.log(purches);   

const {courseTakeOver} = course;
console.log(courseTakeOver);