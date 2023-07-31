var greaterNumber = function(num1, num2){
    var n1 = 10;
    var n2 = -10
    console.log(`---------------- Step 1 ---------------`);
    if (n1>=n2) {
        console.log(`Greatest Number in ${n1} and ${n2} : ${n1}`); 
    } 
    else
    {
        console.log(`Greatest Number: ${n2}`);
    }

    if (num1>=num2) {
        console.log(`Greatest Number in ${num1} and ${num2} : ${num1}`);
    } else {
        console.log(`Greatest Number: ${num2}`);
    }
    console.log(`---------------- Step 2 ---------------`);
    var no1 = 29;
    if (no1%2==0) {
        console.log(`29 Number is EVEN`);
    } else {
        console.log(`29 Number is ODD`);
    }
    var no2 = 44;
    if (no2%2==0) {
        console.log(`44 Number is EVEN`);
    } else {
        console.log(`44 Number is ODD`);
    }
    var no3 = 0;
    if (no3%2==0) {
        console.log(`0 Number is EVEN`);
    } else {
        console.log(`0 Number is ODD`);
    }
    var no4 = 101;
    if (no4%2==0) {
        console.log(`101 Number is EVEN`);
    } else {
        console.log(`101 Number is ODD`);
    }
    console.log(`---------------- Step 3 ---------------`);
    var str1 = "JavaScript";
    var len = str1.length;
    if (len%2==0) {
        console.log(`Javascript length is ${len} and it's EVEN`);
    } else {
        console.log(`Javascript length is ${len} and it's ODD`);
    }
    var str2 = "developer";
    var len = str2.length;
    if (len%2==0) {
        console.log(`devloper length is ${len} and it's EVEN`);
    } else {
        console.log(`devloper length is ${len} and it's ODD`);
    }
    var str3 = "Google";
    var len = str3.length;
    if (len%2==0) {
        console.log(`Google length is ${len} and it's EVEN`);
    } else {
        console.log(`Google length is ${len} and it's ODD`);
    }
}
greaterNumber(800,899);