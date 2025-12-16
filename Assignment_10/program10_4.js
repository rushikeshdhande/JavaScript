

function FhtoCs(fTemp) {
    return (fTemp - 32) * 5 / 9;
}

 
function main()
{
  let fValue = 98.6;
let dRet = FhtoCs(fValue);

console.log("Temperature in Celsius is", dRet.toFixed(2));

}