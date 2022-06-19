const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let globalPlasticProduction= [];

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/globalPlasticProduction',(res,req) =>{
    const item = req.body;
    console.log('item');
    globalPlasticProduction.push(item);

});

app.listen(port,()=>console.log(`my server is running on port ${port}`));


