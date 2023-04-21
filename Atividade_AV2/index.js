const express = require('express');
const app = express();
const port = 3000;
const expbhs = require('express-handlebars');
const hbs = expbhs.create({partialsDir:["views/patials"]});

app.use(express.static('public'));
app.use(express.static('resources'));
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', expbhs.engine());
app.set('view engine', 'handlebars');


var tasks =
[
    
]; 

app.post('/app/add',(req,res)=>
{
    const task = req.body.task;
    
    tasks.push({task});

    console.log(tasks); 
    
    res.render('home-added', {tasks});
});







app.get('/', (req,res) =>
{
    res.render('inicio');
});

app.get('/app', (req,res) =>
{
    res.render('home');
});



app.use(function (req,res){
    res.status(404).render('404');
});



app.listen(port, ()=>
{
    console.log('Server Started');
})