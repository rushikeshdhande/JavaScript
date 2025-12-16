function Pattern(iNo) 
{
    let result = "";
    for (let i = 1; i <= iNo; i++) 
    {
        result += "* ";
    }
    console.log(result);
}
 
let iValue = 5;
Pattern(iValue);
