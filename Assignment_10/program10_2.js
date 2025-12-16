function RectArea(width, height) {
    if (width < 0) width = -width;
    if (height < 0) height = -height;

    return width * height;
}

function main()
{
    
let fValue1 = 5;
let fValue2 = 3;

let dRet = RectArea(fValue1, fValue2);
console.log("Area of rectangle is", dRet.toFixed(2));

}

main();