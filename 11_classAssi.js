console.log(`--------------------------- Assignment 1 -----------------------------`);
class Vehical{
    constructor(VeHoldName, VeName, VeModel, VePassYear, VeNo)
    {
        this.VeHoldName = VeHoldName;
        this.VeName = VeName;
        this.VeModel = VeModel;
        this.VePassYear = VePassYear;
        this.VeNo = VeNo;

    }
    show(){
        console.log(`Vehical Holder Name: ${this.VeHoldName}, Vehical Name: ${this.VeName},Vehical Model: ${this.VeModel}, Vehical Passing Year: ${this.VePassYear}, Vehical Number: ${this.VeNo}`);
    }
}
let vh1 = new Vehical("Ninja Hattori", "Kawasaki", "NK1122", 2023, 3080);
let vh2 = new Vehical("Jiyan Junjun", "Splndor", "SP200", 2018, 6602);
let vh3 = new Vehical("ShinChan", "m80", "M8", 1990, 1000);
let vh4 = new Vehical("Sonam Hattori", "Activa", "AC1", 2019, 5200);
let vh5 = new Vehical("Sunio Nohara", "Ebike", "EBB212", 2023, 1515);

const ar = [vh1, vh2, vh3, vh4, vh5];
for (const itor of ar) {
    itor.show();
    
}