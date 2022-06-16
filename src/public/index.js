"use strict";

const { application } = require('express');
const express = require('express');

const api = express();

api.listen(3000, () =>{
    console.log('api is running');
});

api.get('/',(req,res)=>{
    console.log('/');
    res.send('hello from get');
});

api.use(express.static(__dirname + '/public'));