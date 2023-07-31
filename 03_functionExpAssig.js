var fun = function() {
    console.log(`-----------| STEP 1 |------------`);
    var num1 = 5;
    var res = num1 *=num1;
    console.log(`Square of the Number 5: ${res}`);
    var num2 = 6;
    var res = num2 *= num2;
    console.log(`Square of the Number 6: ${res}`);
    var num1 = 25;
    var res = num1 *=num1;
    console.log(`Square of the Number 25: ${res}`);
    var num2 = 100;
    var res = num2 *= num2;
    console.log(`Square of the Number 100: ${res}`);
    var num1 = 67.89;
    var res = num1 *=num1;
    console.log(`Square of the Number 5: ${res}`);
    var num2 = 59;
    var res = num2 *= num2;
    console.log(`Square of the Number 6: ${res}`);
    console.log(`-----------| STEP 2 |------------`);
    console.log(`Type of Funtion:${typeof fun}`);
    console.log(`-----------| STEP 3 |------------`);
    var len = 499;
    var bre = 917;
    var ans = len * bre;
    console.log(`Area of Rectangle:length=499 & breadth=917 : AOR=${ans}`);
}
fun();
var fun2 = function(name1,name2){
    console.log(`-----------| STEP 4 |------------`);
    console.log(`Before Swapping:name1:${name1},name2:${name2}`);
    var temp = name1;
    name1 = name2;
    name2 = temp;
    console.log(`After Swapping:name1-:${name1},name2-:${name2}`); 
    console.log(`---------------------------------------------------`);
}
fun2("mahi","raina");
var fun3 = function(num1,num2){
    console.log(`Before Swapping:num1: ${num1},num2: ${num2}`);
    var temp = num1;
    num1 = num2;
    num2 = temp;
    console.log(`After Swapping:num1: ${num1},num2: ${num2}`);

}
fun3(100,200);

var str2 = function(str1){
console.log(`-----------| STEP 5 |---------------------------`);
console.log(`"${str1} "length is:${str1.length}`);
var charat6 = str1.charAt(6);
console.log(`Character at 6th position: ${charat6}`);
var charat11 = str1.charAt(11);
console.log(`Character at 11th position: ${charat11}`);
var charAtEnd = str1.charAt(39);
console.log(`Character at Last Position: ${charAtEnd}`);
var charAtStart = str1.charAt(0);
console.log(`Character at Fisrt Position: ${charAtStart}`);
var charAt3rd = str1.charAt(37);
console.log(`Character at Last 3rd Position: ${charAt3rd}`);
var spl = str1.split(' ');
var tot = spl.length;
console.log(`Total Number of Words: ${tot}`);
var squ = tot *= tot;
console.log(`Sqaure of the Total word Count= ${squ}`);

}
str2("JS the most popular language of internet");