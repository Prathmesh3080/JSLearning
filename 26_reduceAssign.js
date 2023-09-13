console.log(`==================== Assignment (Reduce method) ===================`);
console.log(`---------------- Step 1(Sum of All Numbers:) ----------------`);
const array_Num = [20,11,40,25,37,49,9,90,60,2,19];

const arraySum = array_Num.reduce((runningTotal, value)=>{
    return runningTotal + value;
});
console.log(`Sum of All NUmbers: ${arraySum}`);
console.log(`---------------- Step 2( All Numbers multiple by 5:) ----------------`);
const mul = array_Num.filter((currntValue,index)=>{
        return currntValue%5==0;
});
console.log(mul);
const arraySum2 = mul.reduce((runningTotal, value)=>{
    return runningTotal + value;
});
console.log(`Sum of All NUmbers: ${arraySum2}`);

