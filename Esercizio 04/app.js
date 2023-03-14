const express = require('express');
const app = express();

const fs = require('fs');
const colors = require('./colors.json')
const path = require('path');

app.use(express.static('public'));

app.use('/colors', (req,res,next)=>{
    res.json(colors);
});

app.use('/contacts', (req,res,next)=>{
    res.sendFile(__dirname + '/public/contacts-no-css.html');
});

app.use('/sayhello/:name', (req,res,next)=>{
   res.send("Hello " + req.params.name + " !");
});

app.listen(3000, ()=>{
});