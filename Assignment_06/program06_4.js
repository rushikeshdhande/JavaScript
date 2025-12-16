function Multiply(iNo1, iNo2, iNo3) {
     
    if (iNo1 === 0 || iNo2 === 0 || iNo3 === 0) {
        return 0;
    }
    return iNo1 * iNo2 * iNo3;
}

function main()
{
    let iValue1 = 2, iValue2 = 3, iValue3 = 4;
let iRet = Multiply(iValue1, iValue2, iValue3);

console.log("Multiplication is:", iRet);

}

main();