


function CheckLeapYear(year)
 {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Leap Year");
  } else {
    console.log("Not a Leap Year");
  }
}
function main() {
  let yr = 2024;
  CheckLeapYear(yr);
}
main();
