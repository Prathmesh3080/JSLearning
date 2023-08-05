console.log(`============= Assignment 2 ==============`);
let sbiBank={
        bankName:"SBI Bank",
        location:"Pune",
        accountNo: 99887766,
        intrestRate:"7%",
        showDetails: function(){
            console.log(`Bank Details: ${this.bankName}, ${this.location}, ${this.accountNo},${this.bankName}, ${this.intrestRate}`);
        }
}
sbiBank.showDetails();
console.log(`------------------------------------------------------------------`);
let axisBank={
    bankName:"Axis Bank",
    location:"Mumbai",
    accountNo: 223341334,
    intrestRate:"8.5%",
    showDetails: function(){
        console.log(`Bank Details: ${this.bankName}, ${this.location}, ${this.accountNo},${this.bankName}, ${this.intrestRate}`);
    }
}
axisBank.showDetails();
console.log(`------------------------------------------------------------------`);
let yesBank={
    bankName:"Yes Bank",
    location:"Hydrabad",
    accountNo: 2023244441,
    intrestRate:"9%",
    showDetails: function(){
        console.log(`Bank Details: ${this.bankName}, ${this.location}, ${this.accountNo},${this.bankName}, ${this.intrestRate}`);
    }
}
yesBank.showDetails();
console.log(`------------------------------------------------------------------`);
let hdfcBank={
    bankName:"HDFC Bank",
    location:"Kolhapur",
    accountNo: 875334394,
    intrestRate:"8.7%",
    showDetails: function(){
        console.log(`Bank Details: ${this.bankName}, ${this.location}, ${this.accountNo},${this.bankName}, ${this.intrestRate}`);
    }
}
hdfcBank.showDetails();