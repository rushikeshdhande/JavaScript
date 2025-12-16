


function PrintEven(iNo) 
{
    if (iNo <= 0) 
    {
        return;
    }

    for (let iCnt = 1; iCnt <= iNo; iCnt++)
    {
        console.log(iCnt * 2);
    }
}


function main()
{
    let iValue = 5;
PrintEven(iValue);

}

main();