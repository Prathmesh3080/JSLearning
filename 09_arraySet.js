let mySet = new Set();
mySet.add(2);
mySet.add(4);
mySet.add(6);
mySet.add(7);
console.log(mySet);

mySet.add(4);
console.log(mySet);

let isAvailable = mySet.has(6)
console.log(isAvailable);

let is9Available = mySet.has(9)
console.log(is9Available);

console.log(`Set size is ${mySet.size}`);

mySet.delete(4);
console.log(mySet);

// mySet.clear();
for (const element of mySet) {
    console.log(element);
}

let array1 = [4, 5, 4, 5, 8, 5];
let setOfNumbers = new Set();
for (const value of array1) {
    setOfNumbers.add(value);
}
console.log(array1);
console.log(setOfNumbers);

console.log(`Removing duplicate elements from array using spread operator`);
let arrayNew = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];
arrayNew = [...new Set(arrayNew)];
console.log(arrayNew);
// console.log(newSet);


let array =[ 11, "6ft", "GK", "MH", true, true ];
console.log(array);

let map = new Map();
map.set("rollNo", 11);
map.set("height" ,"6ft");
map.set("name" ,"GK");
map.set("state" ,"MH");
map.set("isMarried" ,true);
map.set("haveKid" ,true );
map.set("skills" , ["Angular", "React", "Java", "Docker", "K8", "CICD"] );
// console.table(map);

console.log(map.size);

let stateValue = map.get("state");
console.log(stateValue);
console.log(`-------- SKILLS ------`);
let skills = map.get("skills");
for (const skill of skills) {
    console.log(skill);
}

let isHeightKeyAvailable= map.has("height");
console.log(isHeightKeyAvailable);

map.delete("haveKid");
// console.table(map);

console.log(map.keys());
console.log(map.values());

map.set("rollNo", 22);

console.table(map);

console.log(`-------- Traversing map --------`);
let keys = map.keys();
for (const key of keys) {
    console.log(`${key} ==> ${map.get(key)}`);
}

let personGK = {
    empId: 2233,
    state: "MH",
    designation: "Tech Lead",
    city: "Pune",
    isMarried: true,
    empId: 2233
}
console.log(personGK);

console.log(typeof personGK);

console.log(`Emp Id: ${personGK.empId}`); // Dot Notation
console.log(`Emp city: ${personGK["city"]}`);

let personGK = {
    empId: 2233,
    state: "MH",
    designation: "Tech Lead",
    city: "Pune",
    isMarried: true,
    show: function(){
        console.log(`Inside show function`);
    }
}
console.log(personGK);

console.log(typeof personGK);

console.log(`Emp Id: ${personGK.empId}`); // Dot Notation
console.log(`Emp city: ${personGK["city"]}`);

let isMarried = personGK.isMarried;
console.log(isMarried);

personGK.city = "Mumbai";
console.log(personGK);

delete personGK.designation;
console.log(personGK);

personGK.adharNumber = 123456781234;

personGK.show();

let array = [];

let bank = {
    bankName: "SBI Bank",
    accountNumber: 12345673,
    ifsc: "SBIN000567",
    address: {
        street: "Wakad Main Road",
        pin: 411057,
        landmark: "Near Petrol Pump",
        telPhone: "020-446789",
        city: "Pune",
        state: "MH",
        country : "India"
    }
}

bank.address("city");

let bank = {
    bankName: "SBI Bank",
    accountNumber: 12345673,
    ifsc: "SBIN000567",
    address: {
        street: "Wakad Main Road",
        pin: 411057,
        landmark: "Near Petrol Pump",
        telPhone: "020-446789",
        city: "Pune",
        state: "MH",
        country : "India"
    },
    empNames : ["Jenny", "Elon", "Warrren", "Stew"]
}

let city = bank.address.city;
bank.address.country = "Maharashtra";

let personGK = {
    empId: 2233,
    state: "MH",
    designation: "Tech Lead",
    city: "Pune",
    isMarried: true,
    show: function(){
        console.log(`Inside show function`);
    }
}
console.log(personGK);

console.log(typeof personGK);

console.log(`Emp Id: ${personGK.empId}`); // Dot Notation
console.log(`Emp city: ${personGK["city"]}`);

let isMarried = personGK.isMarried;
console.log(isMarried);

personGK.city = "Mumbai";
console.log(personGK);

delete personGK.designation;
console.log(personGK);

personGK.adharNumber = 123456781234;

personGK.show();

let array = [];

let bank = {
    bankName: "SBI Bank",
    accountNumber: 12345673,
    ifsc: "SBIN000567",
    address: {
        street: "Wakad Main Road",
        pin: 411057,
        landmark: "Near Petrol Pump",
        telPhone: "020-446789",
        city: "Pune",
        state: "MH",
        country : "India",
        getAddress: function(){
           console.log(`Bank Address: ${this.street}, ${this.landmark}, ${this.pin}, ${this.telPhone}, ${city}, ${this.state}, ${this.country}`);
        }
    },
    empNames : ["Jenny", "Elon", "Warrren", "Stew"]
}

let city = bank.address.city;
bank.address.country = "Maharashtra";
bank.empNames.pop();
bank.empNames.unshift("Mark");

bank.address.getAddress();