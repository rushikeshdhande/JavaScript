
function ChkGreater(iNo) {
  return iNo > 100;
}

function main() {
  let iValue = 120;
  let bRet = ChkGreater(iValue);

  if (bRet === true) {
    console.log("Greater");
  } else {
    console.log("Smaller");
  }
}

main();
