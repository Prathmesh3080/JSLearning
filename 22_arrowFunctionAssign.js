console.log(`============ Assignment 1 ====================`);

let show = ()=>{
    console.log("Good Morning, Today is Tuesday");
}
show();

console.log(`-----------------------------------`);
let multiply = (num1, num2, num3) => {
    console.log(`Multiplication= `,num1*num2*num3);
}
multiply(5, 5, 2);
console.log(`-----------------------------------`);
let multiply1 = (num1, num2, num3=1) => {
    console.log(`Multiplication= `,num1*num2*num3);
}
multiply1(10, 4);
console.log(`-----------------------------------`);
let add1 = (n1, n2, n3, n4, n5)=>{
    console.log(n1+n2+n3+n4+n5);
}
add1(100,100,200,349,756);
add1("Iam ", "Learning ", "ES6 ","features ","in depth");       