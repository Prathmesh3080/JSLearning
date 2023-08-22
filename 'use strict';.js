'use strict';
// myName = "GK"; // Not allowed
// console.log(myName);

//var age = 22;
// delete age; // Not allowed

let student = {
    fullName: 'Virat Kohli',
    age: 33,
    totalRuns: 33000
}

// delete student; // Not allowed

// function show(num1, num1){
//     console.log(num1, num1);
// }
// show(5, 5);



function add(num1, num2, ...num ){
    // console.log(`num1 ${num1},  num2 ${num2}`);
    // console.log(num);
}
add(5, 6);
add(9, 5, 6);
add(78, 90, 51, 68);
add(89, 90, 45,78, 90, 51, 68);

function division(num1, num2=1){
    console.log(num1/num2);
}
division(4, 5);
division(0, 7);
division(8);
division(0);

// 1. Object Destructuring
let student = {
    rollNumber: 2233,
    state: "MH",
    city: "Pune",
    college: "COEP Pune"
}
// let state = student.state;
// let college = student.college;
// let city = student.city;
const {state, college,  city, pin=431175} = student;
console.log(state, city ,college, pin);


// 2. Array Destructuring
let array = [4, 5, 6, 77, 88, 99];
let [num1, num2, num3, num4=0] = array;
console.log(num1, num2, num3, num4);

// Self invoking function or IIFE - Immediately invoked function expression
( function(){
    console.log(`inside display function..`);
} )();