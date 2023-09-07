console.log(`=========== Assignment 1 ==========`);
const jsonstr = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role":["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address":{
        "street": "32, Laham St.",
        "city": "Innsburk",
        "country": "Austria"
    },
    "refferred-by": "E0012"
}`
console.log(`------------- Step 1 ---------------------`);
const convert1 = JSON.parse(jsonstr);
console.log(typeof convert1);
console.log(convert1);
console.log(`------------- Step 2 ---------------------`);
console.log(`Role is: ${convert1.role[1]}`);
console.log(`------------- Step 3 ---------------------`);
console.log(`Last Name: ${convert1.name.slice(6,11)}`);
console.log(`------------- Step 4 ---------------------`);
console.log(`DOJ Year: ${convert1.doj.slice(6,10)}`);