


function FindLargest(x, y, z) 
{
    if (x >= y && x >= z) 
    {
        return x;
    } else if (y >= x && y >= z) 
    {
        return y;
    } else {
        return z;
    }
}
 
function main()
{
  
let a = 10, b = 25, c = 15;
let result = FindLargest(a, b, c);

console.log("Largest number is:", result);
}
main();