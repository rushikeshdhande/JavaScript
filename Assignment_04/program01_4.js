function SumNonFact(iNo) {
    let iSum = 0;

    if (iNo < 0) 
    {
        iNo = -iNo; // convert to positive
    }

    for (let i = 1; i < iNo; i++) 
    {
        if (iNo % i !== 0) 
        {
            iSum += i;
        }
    }

    return iSum;
}
  function main()
  {
    
let iValue = 6;
let iRet = SumNonFact(iValue);

console.log(iRet);
  }

  main();