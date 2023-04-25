const express = require('express');
const app = express();
const port = 3000;
const expbhs = require('express-handlebars');
const hbs = expbhs.create({partialsDir:["views/patials"]});
const conn = require('./db/conn');
const Task = require('./routes/taskRouter');
const taskModel = require('./model/task');
const TaskControler = require('./controlers/taskControler');

app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.static('resources'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', expbhs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req,res) =>
{
    res.render('login');
});

app.use('/app', Task);

app.use(function (req,res){
    res.status(404).render('404');
});

conn
    .sync()
    .then(()=>
    {
        app.listen(port);
        console.log('Server Started');
    })

    .catch((err)=>
    {
        console.log(err);
    });
