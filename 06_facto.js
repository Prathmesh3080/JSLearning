console.log("------------- Assignment 1 ------------");
let fact = 1;
function factoria(num) {

    for(let i=1; i<=num; i++)
    {
        fact = fact * i;
    }
    console.log(`Factorial = ${fact}`);
}
factoria(5);
factoria(9);
factoria(11);
factoria(7);
