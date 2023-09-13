//reduce() mwthod
const nums = [20,11,30,5,60,8,21,6,13,9,20];
//find Average = [average = total element sum / total elemets]
let avg = null;
let sum = nums.reduce((runnigValue, value, index)=>{
    runnigValue = runnigValue +value;
    if(index==nums.length-1)
    {
        avg = runnigValue / nums.length;
    }
    return runnigValue;
});
console.log(`sum is: ${sum}, Total Elements: ${nums.length}, Average: ${avg}`);