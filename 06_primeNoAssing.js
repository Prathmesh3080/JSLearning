console.log(`=========== Assignment 2 ==========`);
//`Check Given Number Prime Or Not` 11, 21
let i,count=0;//1,2
function Prime(num) {
    for(i=1; i<num/2; i++)
    {
        if(num%i==0)
        {
            count++;
        }
    }
    if(count==2)
    {
        console.log("Number is Prime");
    }
    else
    {
        console.log("Number is Not Prime");
    }   
}
Prime(11);
Prime(21);
Prime(17);