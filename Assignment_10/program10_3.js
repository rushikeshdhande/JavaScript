function KMtoMeter(km) {
    if (km < 0) {
        km = -km; // convert to positive
    }
    return km * 1000;
}


function main()
{
  let iValue = 5;
let iRet = KMtoMeter(iValue);

console.log("Distance in meter is", iRet);

}

main();