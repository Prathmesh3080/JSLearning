function squareOfTheWordLength(str3, str4, str5) {
        console.log(`------------ Step 1 ----------------`);
        console.log(`Given String is: ${str3}`);
        var len = str3.length;
        console.log(`Length of String: ${len}`);
        console.log(`Square of String Length: ${len*len}`);
        console.log(`------------------------------------`);
        console.log(`Given String is: ${str4}`);
        var len = str4.length;
        console.log(`Length of String: ${len}`);
        console.log(`Square of String Length: ${len*len}`);
        console.log(`------------------------------------`);
        console.log(`Given String is: ${str5}`);
        var len = str5.length;
        console.log(`Length of String: ${len}`);
        console.log(`Square of String Length: ${len*len}`);
        console.log(`------------------------------------`);
}
squareOfTheWordLength("Javascript", "Google Chrome", "Devloper Smart");

var angular = function(){
    var ang = "I am Angular Developer";
    console.log(`Given String is: ${ang}`);
    var len = ang.length;
    console.log(`String Length is: ${len}`);
    var word = ang.split(' ');
    var wordlen = word.length;
    console.log(`Total Number of Words: ${wordlen}`);
    var div = len / wordlen;
    console.log(`Divide of total Words: ${div}`);
    var mul = len * wordlen;
    console.log(`Multiplication of total words: ${mul}`);

}
angular();