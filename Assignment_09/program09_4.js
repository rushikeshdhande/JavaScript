function OddFactorial(iNo) {
  let fact = 1;

  if (iNo < 0) {
    iNo = -iNo; // convert to positive
  }

  for (let i = 1; i <= iNo; i += 2) {
    fact *= i;
  }

  return fact;
}

function main() {
  let iValue = 7;
  let iRet = OddFactorial(iValue);

  console.log("Odd Factorial of number is", iRet);
}

main();
