



function DisplayEvenFactor(iNo) 
{
    if (iNo <= 0) {
        iNo = -iNo;
    }

    for (let i = 1; i <= iNo / 2; i++) {
        if (iNo % i === 0 && i % 2 === 0) {
            console.log(i);
        }
    }
}
 

let iValue = 24;
DisplayEvenFactor(iValue);
