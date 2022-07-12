
 var  input = document.getElementById('number')

// EVENT PRESS ENTER
input.addEventListener('keypress', function(event) {
    
    if(event.key ==='Enter')
    {
        // prevent default settings
        event.preventDefault()
        document.getElementById('myButton').click()
    }

})
// CONVERT FUNCTION
function convert()
{
    var  inputValue = document.getElementById('number').value

    if (document.getElementById('binToDec').checked)
    {
       convertBinToDec(inputValue) 
    }

    else if (document.getElementById('decToBin').checked)
    {
        convertDecToBin(inputValue) 
    }
}
// CONVERT DECIMAL TO BIN
function convertDecToBin(inputValue) 
{
    // VALIDATE IF BINARY
    if ( !isNaN(parseInt(inputValue,10)))
    {
        decimalToBinary (inputValue)
    }

    else
    {
        var result = document.getElementById('result')
        result.innerHTML =  "NIEPRAWIDŁOWA LICZBA"
        result.style.color = "red"
    }
}

function decimalToBinary (inputValue)
{
  
    if (inputValue==0)
    {
        document.getElementById('result').innerHTML =  inputValue +  "=  (0)" + "2".sub()
        return
    }

    var quotient = inputValue
    var binVariable =''

    while (quotient>0)
    {
        binVariable = quotient%2 + binVariable
        quotient = Math.floor(quotient/2)
        console.log(binVariable + " " + quotient)
    } 

    document.getElementById('result').innerHTML =  inputValue +  "=  (" + binVariable +  ")" + "2".sub()

}
// CONVERT BIN TO DECIMAL
function convertBinToDec(inputValue) 
{
    // VALIDATE IF BINARY
    if ( !isNaN(parseInt(inputValue,2)))

    {  
        binaryToDecimal (inputValue)
    }

    else
    {
        var result = document.getElementById('result')
        result.innerHTML =  "NIEPRAWIDŁOWA LICZBA"
        result.style.color = "red"
    }
}
//BINARY TO DECIMAL
function binaryToDecimal (binVariable)
{

    const arrayBin  = [...binVariable]

    var  hexaVariable = 0

    for ( var i = 0; i < arrayBin.length ; i++)
    {
        hexaVariable = hexaVariable + arrayBin[i]*binPower( arrayBin.length -i -1)
    }

    document.getElementById('result').innerHTML =  "(" + binVariable +  ")" + "2".sub() + " = " +  hexaVariable 

}
// BINARY POWER
function binPower (pwr)
{
    if (pwr == 0 )
    {
        return 1
    }

    else  
    {
        if ( pwr == 1)
        {
            return  2
        }
        
        else

        {

            var result = 2

            for ( var i = 2; i <=  pwr ; i++)
            {

                result = result*2
            
            }

            return result
        }
        
    }
 
}
// CLEAR INPUT AND RESULT
function clearFields()
{
    document.getElementById('number').value=''
    document.getElementById('result').innerHTML=''

}