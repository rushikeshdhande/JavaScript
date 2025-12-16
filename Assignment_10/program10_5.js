



function SquareMeter(value) {
    if (value < 0) {
        value = -value; // convert to positive
    }
    return value * 0.092903;
}
 function main()
 {
    let iValue = 100;
let dRet = SquareMeter(iValue);

console.log("Area in square meter is", dRet.toFixed(4));

 }

 main();