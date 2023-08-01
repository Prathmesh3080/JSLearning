console.log(`===================== Assignment 1 ===================`);
console.log(`--------------------- Step 1 -------------------------`);
// A E I O U
function vowelCount(str){
    let count = 0;
    let index = 0;
    while ( index < str.length) {
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char); 
            count = count + 1;
        }
        index++;
    }
    console.log(`Total number of vowels is: ${count}`);
}
vowelCount("I am very good IT Developer");
console.log(`--------------------- Step 2 -------------------------`);
// WAP to get the sum of numbers from 0 to 5
let sum = function(){
    let totalSum = 0;
     for (let index = 1; index <=5; index++) {
         totalSum = totalSum + index;
     }
     console.log(`Sum of first 20 numbers is : ${totalSum}`);
 }
 sum();
 console.log(`--------------------- Step 3 -------------------------`);
 function oddPositionedChars(str) {
    let i = 0;
    while (i < str.length) {
        const result = str.charAt(i);
        if(i%2==1 && result != ' ');
        {
            console.log(result);
        }
        i++;
    }

    
 }
 oddPositionedChars("Hard work always pays Back");
 oddPositionedChars("Soon I will be IT Champ");