const express = require('express');
const app = express();
const PORT = 8080;
const swaggerUi = require("swagger-ui-express");
const swaggerJsondoc = require("swagger-jsdoc");

const options = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "TheCodebuzz API",
        version: "1.0.0",
        description:
          "Thecodebuzz test service to demo how to document your API",
        license: {
          name: "MIT",
          url: "https://thecodebuzz.com"
        },
        contact: {
          name: "TheCodeBuzz",
          url: "https://thecodebuzz.com",
          email: "info@thecodebuzz.com"
        }
      },
      servers: [
        {
          url: "http://localhost:8080/"
        }
      ]
    },
    apis: []
  };

app.use(express.json())

const global_plastic_production_route = require('./routes/global_plastics_production');
const mismanaged_waste_global_total_route = require('./routes/mismanaged_waste_global_total');
const per_capita_mismanaged_route = require('./routes/per_capita_mismanaged');

app.get("/hello", (req, res) => {
  res.json("Hello world!");
});

app.use('/global_plastic_production',global_plastic_production_route);
app.use('/mismanaged_waste_global_total',mismanaged_waste_global_total_route);
app.use('/per_capita_mismanaged',per_capita_mismanaged_route);






app.listen(
    PORT, 
    () => console.log(`api is running on http://localhost:${PORT}`)
);
