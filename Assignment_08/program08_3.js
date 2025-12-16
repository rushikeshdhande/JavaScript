function Factorial(iNo) {
    let fact = 1;

    if (iNo < 0) {
        iNo = -iNo; // convert to positive
    }

    for (let i = 1; i <= iNo; i++) {
        fact *= i;
    }

    return fact;
}

function main()
{
     
let iValue = 5;
let iRet = Factorial(iValue);

console.log("Factorial of number is", iRet);

}

main();