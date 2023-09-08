console.log(`==================== Assignment 3(Filter method) ===================`);
console.log(`---------------- Step 1(Even Numbers:) ----------------`);
const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
const newArray = arrayNumbers.filter((currentValue) =>{
    return currentValue%2==0;
});
console.log(newArray);

console.log(`---------------- Step 2(Odd Numbers:) ----------------`);
const newArray1 = arrayNumbers.filter((currentValue) =>{
    return currentValue%2==1;
});
console.log(newArray1);

console.log(`---------------- Step 3(Greater than 50 Numbers:) ----------------`);
const newArray2 = arrayNumbers.filter((currentValue) =>{
    return currentValue>50;
});
console.log(newArray2);

console.log(`---------------- Step 4(Multiple by 5:) ----------------`);
const newArray3 = arrayNumbers.filter((currentValue) =>{
    return currentValue%5==0;
});
console.log(newArray3);

console.log(`---------------- Step 5(Numbers Between 20 to 50:) ----------------`);
const newArray4 = arrayNumbers.filter((currentValue) =>{
    return currentValue>=20 && currentValue<=50;
});
console.log(newArray4);