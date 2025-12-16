function MultipleDisplay(iNo) {
    let output = "";
    for (let i = 1; i <= iNo; i++) {
        if (i % 5 === 0) {
            output += i + " ";
        }
    }
    console.log(output);
}

 
let iValue = 30;
MultipleDisplay(iValue);
