var candi = function(gradeScore, hscScore, sscScore, candidateName){
    var result = gradeScore>=70 || hscScore>=80 || sscScore>90
    ?    `Congrates ${candidateName} you are Eligible for TCS Interview.`
    :   `${candidateName}, Unfortunately you are Not Eligible for TCS interview`;

    console.log(result);
}
candi(80,86,90,"Ninja");
candi(70,65,55,"Jiyan");
