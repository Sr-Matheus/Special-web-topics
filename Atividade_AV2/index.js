const express = require('express');
const app = express();
const port = 3000;
const expbhs = require('express-handlebars');

app.engine('handlebars', expbhs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(express.static('resources'));

app.get('/', (req,res) =>
{
    res.render('home');
});

app.get('/app', (req,res) =>
{
    res.render('app');
});

app.use(function (req,res){
    res.status(404).render('404');
});



app.listen(port, ()=>
{
    console.log('Server Started');
})