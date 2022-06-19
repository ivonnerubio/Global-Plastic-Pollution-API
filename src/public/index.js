"use strict";
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const express = require('express');
const app = express();
const PORT = 8080;
const swaggerOptions = {
    swaggerDefinition: {
        info:{
            title: 'Global Plastic Pollution API',
            description: 'Global Plastic Pollution API',
            contact: {
                name: "Ivonne Rubio"
            },
            servers: ["http://localhost:8080"]
        }
    },//['routes/*.js']
    apis: ["index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));



app.listen(
    PORT, 
    () => console.log(`api is running on http://localhost:${PORT}/api-docs`)
);


// Routes
/**
 * @swagger
 * /global:
 *      get:
        *  description: Use to request all customers
        *  responses:
        *      '200': 
        *          description: A successful response
 */
app.get('/global',(req,res)=>{
    console.log('/');
    res.send('hello from get');
    res.status(200);
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