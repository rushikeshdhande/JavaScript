


function Percentage(total, obtained) {
  if (total === 0) {
    return 0.0;
  }
  return (obtained / total) * 100;
}

function main() {
  let totalMarks = 500;
  let obtainedMarks = 375;

  let result = Percentage(totalMarks, obtainedMarks);
  console.log("Percentage is:", result.toFixed(2) + "%");
}

main();
