



function DisplayFactor(iNo) 

{
    if (iNo <= 0) {
        iNo = -iNo; // convert to positive
    }

    for (let i = 1; i <= iNo / 2; i++) 
        {
        if (iNo % i === 0) {
            console.log(i);
        }
    }
}
 


function main()
{
    let iValue = 12;
DisplayFactor(iValue);
}


main();