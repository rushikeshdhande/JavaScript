function FactorialDiff(iNo) {
  let evenFact = 1;
  let oddFact = 1;

  if (iNo < 0) {
    iNo = -iNo;
  }

  for (let i = 1; i <= iNo; i++) {
    if (i % 2 === 0) {
      evenFact *= i;
    } else {
      oddFact *= i;
    }
  }

  return evenFact - oddFact;
}


function main() {
  let iValue = 5;
  let iRet = FactorialDiff(iValue);

  console.log("Factorial difference is", iRet);
}

main();
