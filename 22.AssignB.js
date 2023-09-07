class arrayEmployee{
    constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
         
        
        if(this.emp_company == "TCS"){
            console.log(`----------- Step 1 -----------`);
            console.log(`Name: ${this.emp_name}, Company: ${this.emp_company}`);
           
        }
    
        if(this.emp_dept == "Finance"){
            console.log(`----------- Step 2 -----------`);
            console.log(`Name: ${this.emp_name}, Department: ${this.emp_dept}`);
        }
        if(this.emp_name.startsWith=="R"){
            console.log(`Name: ${this.emp_name}`);
        }
    }
 } 

const emp_anil = new arrayEmployee(22,"Anil", "IT", 50000, "TCS");
const emp_radha = new arrayEmployee(33,"Radha", "HR", 74000, "wipro");
const emp_rishi = new arrayEmployee(55,"Rishi", "Finance", 47000, "TCS");
const emp_sonali = new arrayEmployee(66,"Sonali", "Finance", 45000, "Infy");
const emp_monika = new arrayEmployee(77,"Monika", "IT", 40000, "wipro");
const emp_vinay = new arrayEmployee(88,"Vinayak", "IT", 75000, "TCS");
const emp_mahi = new arrayEmployee(99,"Mahesh", "HR", 85000, "Infy");
