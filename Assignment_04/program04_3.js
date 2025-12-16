function NonFact(iNo) 
{
    if (iNo < 0) 
        {
        iNo = -iNo; // convert to positive
    }

    for (let i = 1; i < iNo; i++) 
    {
        if (iNo % i !== 0) 
            {
            console.log(i);
        }
    }
}
 
let iValue = 6;
NonFact(iValue);
