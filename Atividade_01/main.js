var number_steps = 4;
var current_step = 1;

window.onload = function load() 
{
    current_step++;
    for (let index = current_step; index < number_steps; index++)
    {
        document.getElementById("passo-" + index).style.display = "none";
    }
    
        
}

function previous_step()
{

}


function next_step()
{
    document.getElementById("passo-1").style.display = "none";
    document.getElementById("passo-2").style.display = "block";
    document.getElementById("mark-2").classList.remove('gray');
    document.getElementById("mark-2").classList.add('green');
}