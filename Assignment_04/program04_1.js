

function MultFact(iNo) {
    let iMult = 1;

    if (iNo < 0) {
        iNo = -iNo; // convert to positive
    }

    for (let i = 1; i <= iNo / 2; i++) 
        {
        if (iNo % i === 0) {
            iMult = iMult * i;
        }
    }

    return iMult;
}
 
function main()
{
    
let iValue = 6;
let iRet = MultFact(iValue);

console.log(iRet);
}

main();