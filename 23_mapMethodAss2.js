console.log(`==================== Assignment 2(map method) ===================`);
console.log(`---------------- Step 1(Employee Names:) ----------------`);
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

const array = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vini, emp_mahi];
const stud = array.map((Employee) =>{
    return Employee.emp_name;
});
console.log(stud);
console.log(`---------------- Step 2(Department Names:) ----------------`);
const stud1 = array.map((Employee) =>{
    return Employee.emp_dept;
});
console.log(stud1);
console.log(`---------------- Step 3(List of Id's:) ----------------`);
const stud2 = array.map((Employee) =>{
    return Employee.emp_id;
});
console.log(stud2);