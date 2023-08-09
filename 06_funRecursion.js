function Recur(num) {
    
    if(num==1)
    {
        return 1;
    }
    else
    {
        return num * Recur(num-1);
    }
}
let result = Recur(5);
console.log(`Factorial = ${result}`);