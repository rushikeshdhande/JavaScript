function DisplayConvert(cValue) 
{
    if (cValue >= 'a' && cValue <= 'z') 
      {
        console.log(cValue.toUpperCase());
    } else if (cValue >= 'A' && cValue <= 'Z') 
      {
        console.log(cValue.toLowerCase());
    }
}
 

let cValue = 'a';  
DisplayConvert(cValue);
