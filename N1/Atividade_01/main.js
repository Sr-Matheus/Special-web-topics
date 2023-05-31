var number_steps = 4;
var current_step = 1;

window.onload = function load() 
{
    
    for (let index = current_step + 1; index <= number_steps; index++)
    {
        document.getElementById("passo-" + index).style.display = "none";
        document.getElementById("submit").style.display = "none"
        document.getElementById("prev").setAttribute("disabled","disabled");
    }
    
        
}

function previous_step()
{
    if (current_step > 1) 
    {
        
        document.getElementById("submit").style.display = "none";
        document.getElementById("next").style.display = "inline";

        document.getElementById("next").innerHTML = "Próximo passo";
        document.getElementById("passo-"+ current_step).style.display = "none";
        document.getElementById("mark-"+current_step).classList.remove('green');
        document.getElementById("mark-"+current_step).classList.add('gray');
        current_step--;

        document.getElementById("passo-" + current_step).style.display = "block";
        document.getElementById("mark-" + current_step).classList.remove('gray');
        document.getElementById("mark-" + current_step).classList.add('green');
    }

    if (current_step == 1) 
    {
        document.getElementById("prev").setAttribute("disabled","disabled");
    }

}


function next_step()
{
    if (current_step < number_steps) 
    {
        document.getElementById("passo-"+ current_step).style.display = "none";
        document.getElementById("mark-"+current_step).classList.remove('gray');
        document.getElementById("mark-"+current_step).classList.add('green');
        current_step++;
    
        document.getElementById("passo-" + current_step).style.display = "block";
        document.getElementById("mark-" + current_step).classList.remove('gray');
        document.getElementById("mark-" + current_step).classList.add('green');
        document.getElementById("prev").removeAttribute("disabled", "disabled");
    }

    if (current_step == number_steps) 
    {
        document.getElementById("next").style.display = "none";
        document.getElementById("submit").style.display = "inline";
    }
    
}