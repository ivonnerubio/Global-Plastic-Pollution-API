const express = require('express'),
bodyParser = require("body-parser"),
swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res
      .status(200)
      .send('https://global-plastic-pollution-api.herokuapp.com/global_plastic_production \n https://global-plastic-pollution-api.herokuapp.com/mismanaged_waste_global_total \n https://global-plastic-pollution-api.herokuapp.com/per_capita_mismanaged')

});

const global_plastic_production_route = require('./routes/global_plastics_production.js');
const mismanaged_waste_global_total_route = require('./routes/mismanaged_waste_global_total.js');
const per_capita_mismanaged_route = require('./routes/per_capita_mismanaged.js');

app.use("/global_plastic_production",global_plastic_production_route);
app.use("/mismanaged_waste_global_total",mismanaged_waste_global_total_route);
app.use("/per_capita_mismanaged",per_capita_mismanaged_route);


const options = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Global Plastic Pollution API",
        version: "1.0.0",
        description:
          "This is an API that was created from real live data on this website: ",
        license: {
          name: "MIT",
          url: "https://thecodebuzz.com"
        },
        contact: {
          name: "Ivonne Rubio",
          url: "https://www.ivonnerubio.com",
          email: "irubio081@outlook.com"
        }
      },
      servers: [
        {
          url: "/"
        }
      ]
    },
    apis: ["./routes/*.js"]
    };



const specs = swaggerJsdoc(options);
app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});