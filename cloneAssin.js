console.log(`---------- Assignment 3 ----------`);
console.log(`---------- Step 1 ---------------------------`);
const arrayNum = [20,3,4,56,90,400,49];
let arrayNums = arrayNum; 
arrayNums.push(55,66);
console.log(arrayNums);

console.log(`--------------------- Step 2 -------------------`);
let Spreadnew = [...arrayNums, 10, 25]

console.log(`Old Array Values: ${arrayNums}`);
console.log(`New Array Values: ${Spreadnew}`);

console.log(`--------------------- Step 3 -------------------`);
let arrEven = [2,30,14,8];
const merged = [].concat(arrayNums, arrEven)
console.log(`Concate Two Arrays: ${merged}`);

console.log(`--------------------- Step 4 -------------------`);
const employee_info = {
    emp_id: 27,
    emp_Name: "John Doe",
    salary:{
        july_Month: "40,000INR",
        aug_Month: "50,000INR",
        jun_Month: "65,000INR"
    },
    address:{
        locality:{
            colony: "Om Vrindavan Society",
            street: "India"
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"

    },
    mobiles: ["+91 8600 3456 88", "1800 - 4567 32", "+91 9096 5678 71"],
    // getaddress : function(){
    //     console.log(`Employee Details: ${this.locality}, ${this.colony}, ${this.street},
    //     ${this.city}, ${this.state}, ${this.country}`);
    // }
}
//employee_info.getaddress();
console.log(employee_info.address.locality);
//console.log(employee_info.address.street);
console.log(employee_info.address.city);
console.log(employee_info.address.state);
console.log(employee_info.address.country);
console.log(`------------------------------------------`);
console.log(employee_info.mobiles);
console.log(`--------------------- Step 5 -------------------`);
let json = JSON.parse(JSON.stringify(employee_info));
json.salary.july_Month = "80,000INR";
console.log(`Updated Salary:`, json.salary.july_Month);
json.address.country = "United Kingdom";
console.log(`Updated Country:`, json.address.country);
