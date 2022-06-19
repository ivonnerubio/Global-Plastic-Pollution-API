"use strict";
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const express = require('express');
const app = express();
const PORT = 8080;



const swaggerDefinition = {
    info: {
      title: 'MySQL Registration Swagger API',
      version: '1.0.0',
      description: 'Endpoints to test the user registration routes',
    },
    host: 'localhost:8080',
    basePath: '/',
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        scheme: 'bearer',
        in: 'header',
      },
    },
  };

  const swaggerOptions = {
    swaggerDefinition,
    apis: ['./routes/*.js']
};

  
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.get('/swagger.json', function(req,res){
    res.setHeader('Content-Type','application/json');;
    res.send(swaggerDocs);
});


app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));



app.listen(
    PORT, 
    () => console.log(`api is running on http://localhost:${PORT}/api-docs`)
);


// Routes
/**
 * @swagger
 * components:
 *  schemas:
 *      Book:
 *          type: object
 *          required:
 *              - title
 *              - author
 *          properties:
 *              id:
 *                  type: string
 *                  description: The auto-generated id of the book
 *              title:
 *                  type: string
 *                  description: the title of the book
 *          example:
 *              id: fDD*23
 *              title: Ivonne Rubio 
 *              author: Ivonne Rubio Author 
 */
app.get('/',(req,res)=>{
    console.log('/');
    res.send('hello from get');
    res.status(200);
});

app.use(express.static(__dirname + '/public'));

