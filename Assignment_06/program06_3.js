

function ChkEqual(iNo1, iNo2) {
  return iNo1 === iNo2;
}

function main() {
  let iValue1 = 10;
  let iValue2 = 20;

  let bRet = ChkEqual(iValue1, iValue2);

  if (bRet === true) {
    console.log("Equal");
  } else {
    console.log("Not Equal");
  }
}

main();
