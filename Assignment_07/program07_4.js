function OddDisplay(iNo) {
    let output = "";
    for (let i = 1; i <= iNo; i++) {
        if (i % 2 !== 0) {
            output += i + " ";
        }
    }
    console.log(output);
}


let iValue = 10;
OddDisplay(iValue);
