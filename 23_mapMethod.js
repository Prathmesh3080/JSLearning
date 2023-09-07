console.log(`==================== Assignment 1(map method) ===================`);
console.log(`---------------- Step 1(Add 10 into each Element) ----------------`);
const array = [20,11,40,25,23,11,9,31,60,2,19];
const arrayOfTen = array.map((currentValue, index, array) =>{
       return currentValue+10;       
});
console.log(arrayOfTen);
console.log(`---------------- Step 2(Cube of each Element) ----------------`);
const arrayOfCube = array.map((currentValue, index, array) =>{
    return currentValue*currentValue*currentValue;       
});
console.log(arrayOfCube);
console.log(`---------------- Step 3(Add index value into each Element) ----------------`);
const arrayOfIndex = array.map((currentValue, index, array) =>{
    return currentValue+index;       
});
console.log(arrayOfIndex);