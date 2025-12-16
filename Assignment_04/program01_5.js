function FactDiff(iNo) {
    let sumFact = 0;
    let sumNonFact = 0;

    if (iNo < 0) 
    {
        iNo = -iNo; // convert to positive
    }

    for (let i = 1; i < iNo; i++) 
      
      {
        if (iNo % i === 0) 
        {
            sumFact += i;
        } else {
            sumNonFact += i;
        }
    }

    return sumFact - sumNonFact;
}

function main()
{
   
let iValue = 6;
let iRet = FactDiff(iValue);

console.log(iRet);

}

main()