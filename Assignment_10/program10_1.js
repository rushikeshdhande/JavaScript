function CircleArea(radius) {
  const PI = 3.14;

  if (radius < 0) {
    radius = -radius; // convert to positive
  }

  return PI * radius * radius;
}

function main() {
  let fValue = 5;
  let dRet = CircleArea(fValue);

  console.log("Area of circle is", dRet.toFixed(2));
}

main();
