function ChkVowel(cValue) {
  if (
    cValue === "a" ||
    cValue === "e" ||
    cValue === "i" ||
    cValue === "o" ||
    cValue === "u" ||
    cValue === "A" ||
    cValue === "E" ||
    cValue === "I" ||
    cValue === "O" ||
    cValue === "U"
  ) {
    return true;
  } else {
    return false;
  }
}

function main() {
  let cValue = "o";
  let bRet = ChkVowel(cValue);

  if (bRet === true) {
    console.log("It is Vowel");
  } else {
    console.log("It is not Vowel");
  }
}
main();
