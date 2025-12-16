function ChkEven(iNo) {
  if (iNo % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function main() {
  let iValue = 6;
  let bRet = false;
  bRet = ChkEven(iValue);

  if (bRet === true) {
    console.log("Number is Even");
  } else {
    console.log("Number is Odd");
  }
}
main();
