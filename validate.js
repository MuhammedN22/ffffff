var ProdName = document.getElementById('ProductName');
var ProdAge = document.getElementById('Age');

// validation in front-end is real time 
// validation in back-end  in ip


// Make a Reg Exprestion "نمط معين منظم"
var RegExName = /^[A-Z]{1}[a-z]{1,}$/

document.getElementById("btnCheck1").addEventListener("click",
    function() 
    {
        if (RegExName.test(ProdName.value))
        {
            alert('Product is Valid')
        }
        else
        {
            alert("Not Valid")
        }
    }
)

var RegExAge = /^([1-7][0-9]|80)$/

document.getElementById("btnCheck2").addEventListener("click",
    function() 
    {
        if (RegExAge.test(ProdAge.value))
        {
            alert('Product is Valid')
        }
        else
        {
            alert("Not Valid")
        }
    }
)