console.log(`------------------ Step 1 --------------------`);
function maleMarrigeEligibilty(boyname, age, gender) {
    
    if (age>=21) {
        console.log(`Hello, ${boyname} You are Eligible for Marriage`);
    } else {
        console.log(`Hello, ${boyname} You are Not Eligible for Marriage`);
    }

}
maleMarrigeEligibilty("Billgates",25,"Male");
maleMarrigeEligibilty("SteveJobs",17,"Male");

console.log(`------------------ Step 2 --------------------`);
function femaleMarrigeEligibilty(girlname, age, gender) {
    if (age>=21) {
        console.log(`Hello, ${girlname} You are Eligible for Marriage`);
    } else {
        console.log(`Hello, ${girlname} You are Not Eligible for Marriage`);
    }

}
femaleMarrigeEligibilty("Melinda",16,"Female");
femaleMarrigeEligibilty("Laurene",27,"Female");