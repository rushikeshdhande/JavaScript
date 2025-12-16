function Divide(iNo1, iNo2) {
    let iAns = 0;

    if (iNo2 === 0) {
        return -1;
    }

    iAns = iNo1 / iNo2;
    return iAns;
}
 

let iValue1 = 15;
let iValue2 = 5;

function main()
{
    let iRet = Divide(iValue1, iValue2);

console.log("Division is " + iRet);
}

 main()