console.log(`============= Assignment 1 ==============`);
console.log(`------------- Step 1 ------------`);
let professor = {
    Name : "Ninja",
    Email: "ninja12@gmail.com",
    id: 3080,
    degree:{
        engineering: "CSE",
        PHD: "Adv Computing",
        role: "Professor",         
    },
    salary: "40k",
    certificate: ["Hacker Rank Participation", "Certifacte in IFE course", "Certificate in Adv. Programming"],
    new : function(){
            console.log(this.degree);
    }
    
}
console.log(professor.degree);
professor.totalExp = "14 Years";
professor.certificate.push("Oracale Certificate");
console.log(professor.certificate[professor.certificate.length-1]);