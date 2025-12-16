function FindMax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function main()
{
   
let num1 = 10;
let num2 = 25;

let result = FindMax(num1, num2);
console.log("Maximum is:", result);

}

main();