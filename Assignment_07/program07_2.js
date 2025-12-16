function Display(iNo) {
    let output = "";
    for (let i = 1; i <= iNo; i++) {
        output += "* ";
    }
    console.log(output);
}


let iValue = 5;
Display(iValue);
