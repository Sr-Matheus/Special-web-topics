const express = require('express');
const app = express();
const port = 3000;
const expbhs = require('express-handlebars');

app.engine('handlebars', expbhs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(express.static('resources'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) =>
{
    res.render('inicio');
});

app.get('/app', (req,res) =>
{
    res.render('home');
});


app.post('/app/add',(req,res)=>
{
    const task = req.body.task;
    
    res.render('home-added', { task:task });
});

app.use(function (req,res){
    res.status(404).render('404');
});



app.listen(port, ()=>
{
    console.log('Server Started');
})