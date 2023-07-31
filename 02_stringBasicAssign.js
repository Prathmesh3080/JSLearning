console.log("---------- STEP 1 ----------");
function stringHandsOn() {
    var str1 = `   Hey you are doing good, keep it up    `;
    console.log(str1);

    console.log("---------- STEP 2 ----------");
    var lent = str1.length;
    console.log(`Length of string is : ${lent}`);

    console.log("---------- STEP 3 ----------");
    var spaces = str1.trim();
    console.log(`After trim length : ${spaces.length}`);

    console.log("---------- STEP 4 ----------");
    var exspace = str1.length - spaces.length;
    console.log(`Extra Spaces in string:${exspace}`);

    console.log("---------- STEP 5 ----------");
    var charAt0 = spaces.charAt(0);
    var charAtEnd = spaces.charAt(33);
    console.log(`1st Character of Trimed string is:${charAt0}`);
    console.log(`Last character of trimed string is:${charAtEnd}`);

    console.log("---------- STEP 6 ----------");
    console.log(`Total Number of Words in string:${spaces.length}`);

    console.log("---------- STEP 7 ----------");
    var index1 = spaces.indexOf(`good`);
    console.log(`Index of "good" is:${index1}`);

    console.log("---------- STEP 8 ----------");
    var sub = spaces.substring(22);
    console.log(`Substring of index 22 is:${sub}`);

    console.log("---------- STEP 9 ----------");
    var inclu = spaces.includes(`up`);
    console.log(`String ends with word "up": ${inclu}`);

    console.log("---------- STEP 10 ----------");
    var inclu2 = spaces.includes(`Hey`);
    console.log(`String starts with "Hey" : ${inclu2}`);
}
stringHandsOn();
