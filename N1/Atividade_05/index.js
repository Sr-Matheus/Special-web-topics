const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const basePath = path.join(__dirname, 'templates');

app.get('/users/add', (req,res) => {
    res.sendFile(`${basePath}/users.html`);
});

app.use(
    express.urlencoded({
        extended: true
    })
);


app.use(express.json());

app.post('/users/save', (req, res) => {
    const name = req.body.nome;
    const age = req.body.idade;
    console.log(`Nome ${name} idade ${age}`);
});

app.get('/about', (req,res)=>{
    res.sendFile(`${basePath}/about.html`);
});


app.get('/', (req,res)=>{
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, ()=>{
    console.log('Servidor Iniciado');
});