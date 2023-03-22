const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const basePath = path.join(__dirname, 'templates');

app.get('/home', (req,res)=>{
    res.sendFile(`${basePath}/home.html`);
});

app.get('/about', (req,res)=>{
    res.sendFile(`${basePath}/about.html`);
});


app.get('/', (req,res)=>{
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, ()=>{
    console.log('Server Started');
});