
let number = document.getElementsByClassName("number")[0]; 
let Celcius = document.getElementsByClassName("cel")[0]; 
let Fahrenheit = document.getElementsByClassName("Fah")[0]; 
let p = document.getElementsByClassName("para")[0]; 

let temp

function tap() 
{
    if (Celcius.checked) 
    {
        temp = number.value;
        temp = temp * 9 / 5 + 32;
        p.innerHTML = temp + " F";
    } 
    
    else if (Fahrenheit.checked) 
    {
        temp = number.value;
        temp = (temp - 32) * (5/9);
        p.innerHTML = temp + " C";
    } 
    
    else 
    {
        p.innerHTML = "Select a Unit";
    }
}