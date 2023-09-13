console.log(`==================== Assignment 3(Filter method) ===================`);
console.log(`---------------- Step 1(Company :) ----------------`);
class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
        }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vini = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const emplo = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vini, emp_mahi];
const emp = emplo.filter((employee) =>{
    return employee.emp_company==='TCS';
});
for (const empp of emp) {
    console.log(`Company Name: ${empp.emp_company}, Employee Name: ${empp.emp_name}`);
}
console.log(`==---------------==------------==---------------==-----------==--------==`);
const emp2 = emplo.filter((employee) =>{
    return employee.emp_company==='Wipro';
});

let salSum = 0;
for (const employee of emp2) {
    salSum = salSum + employee.emp_salary;
}
let avg = salSum/emp2.length
console.log(`Average salary from Wipro = ${avg}`);
console.log(`==---------------==------------==---------------==-----------==--------==`);
const emp3 = emplo.filter((employee) =>{
    return employee.emp_company==='Wipro' || employee.emp_company==='Infy';
});

let salSum1 = 0;
for (const employee of emp3) {
    salSum1 = salSum1 + employee.emp_salary;
}
console.log(`Average salary from Wipro = ${salSum/emp2.length}`);