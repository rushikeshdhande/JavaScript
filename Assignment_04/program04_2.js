function FactRev(iNo) {
    if (iNo < 0) {
        iNo = -iNo;  
    }

    for (let i = Math.floor(iNo / 2); i >= 1; i--) 
        {
        if (iNo % i === 0) {
            console.log(i);
        }
    }
}
 

let iValue = 12;
FactRev(iValue);
