function EvenFactorial(iNo) {
  let fact = 1;

  if (iNo < 0) {
    iNo = -iNo; // convert to positive
  }

  for (let i = 2; i <= iNo; i += 2) {
    fact *= i;
  }

  return fact;
}

function main() {
  let iValue = 6;
  let iRet = EvenFactorial(iValue);

  console.log("Even Factorial of number is", iRet);
}

main();
