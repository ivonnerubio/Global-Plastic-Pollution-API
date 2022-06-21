"use strict";

const express = require('express');
const app = express();
const PORT = 8080;
const fetch = require('node-fetch');

// Middleware to parse to JSON
app.use(express.json());

// var globalPlasticProduction = JSON.parse('./data/json/global-plastics-production.json');
// console.log(globalPlasticProduction);

fetch("./global-plastics-production.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data);
    })
    
app.listen(PORT, () => console.log('server is 🟢'))


// ROUTES
app.get('/globalPlasticProduction',(req,res)=>{
    res.status(200).send(globalPlasticProduction)
});

app.get('/globalPlasticProduction/year',(req,res)=>{
    res.status(200).send(globalPlasticProduction)
});

app.use(express.static(__dirname + '/public'));

