var number_steps = 4;
var current_step = 1;

window.onload = function load() 
{
    
    for (let index = current_step + 1; index <= number_steps; index++)
    {
        console.log(index);
        document.getElementById("passo-" + index).style.display = "none";
    }
    
        
}

function previous_step()
{
    if (current_step > 1) 
    {
        document.getElementById("passo-"+ current_step).style.display = "none";
        document.getElementById("mark-"+current_step).classList.remove('green');
        document.getElementById("mark-"+current_step).classList.add('gray');
        current_step--;

        document.getElementById("passo-" + current_step).style.display = "block";
        document.getElementById("mark-" + current_step).classList.remove('gray');
        document.getElementById("mark-" + current_step).classList.add('green');
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
    }

    
}