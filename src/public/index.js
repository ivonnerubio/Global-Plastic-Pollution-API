"use strict";

const { application } = require('express');
const express = require('express');

const app = express();

app.listen(3000, () =>{
    console.log('api is running');
});

app.get('/',(req,res)=>{
    console.log('/');
    res.send('hello from get');
});

app.use(express.static(__dirname + '/public'));



// // Database 
// const pgtools = require('pgtools');
// const config = {
//     user: "posgres",
//     host: "localhost",
//     password: "password",
//     port: 5432
// };

// pgtools.createdb(config,"newDB", function(err,res){
//     if(err){
//         console.error(err);
//         process.exit(-1);
//     }
//     console.log(res);
// });