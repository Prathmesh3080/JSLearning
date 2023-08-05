let personGK = {
    empId: 2233,
    state: "MH",
    designation: "Tech Lead",
    city: "Pune",
    isMarried: true
}
console.log(personGK);

console.log(typeof personGK);

console.log(`Emp Id: ${personGK.empId}`); // Dot Notation
console.log(`Emp city: ${personGK["city"]}`);

let isMarried = personGK.isMarried;
console.log(isMarried);