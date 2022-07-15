function printSubset ()
{   
        // wczytanie wymiaru tablicy z inputboxa i stworzenie tablicy
        // stworzenie tablicy dynamicznej A do podziorów
        // zapisanie w trzeciej tablicy wyników ( podzbiorów )
        // usuwanie i dodawanie elemtnó wg algorytmu
        // wyświetlenie tablicy3
        
        
        // read fixed dimension
        var dim = document.getElementById("number").value

        // main set 
        const setArray = new Array(dim)

        for ( var i=0; i< dim ; i++)
        {
            setArray[i-1] = i
        }

        //temp subset table
        const subsetTemp  = []

        const subsetsArray =  ["{zbiór pusty}"]

        var maxItem = -1

        for ( var i = 0; i < dim; i++ )
        {
            if (maxItem < setArray[i] && subsetTemp.indexOf( setArray[i] ) == -1)
                
            {
                maxItem = setArray[i]
            }
        }

        if (maxItem!=-1)
        {
            for (var i = 0; i< subsetTemp.length ; i++)
            {
                subsetTemp.push(maxItem)
                
            }

            for (var i = 0; i< subsetTemp.length ; i++)
            {
                if (maxItem<subsetTemp[i])
                {
                    subsetTemp.pop(subsetTemp[i])
                }
            
            }

            addRecord()
        }

        else
        {
            for (var i =0; i< subsetsArray.length ; i++)
            {
                document.getElementById('result').append('p',subsetsArray[i])
            }
        }
}

function addRecord()
{
    var setItem =''

    for (var k = 0; k< subsetTemp.length ;k++)
    {
        setItem = setItem + ',' + subsetTemp[k]
    }

    setItem = '{' + setItem + '}'
    subsetsArray.push(setItem)
}

 // CLEAR INPUT AND RESULT
 function clearFields()
 {
     document.getElementById('number').value=''
     document.getElementById('result').innerHTML=''
 
 }