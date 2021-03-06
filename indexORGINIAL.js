const express = require('express');
const app = express();
const PORT = 8080;
// const swaggerUi = require("swagger-ui-express");
// const swaggerJsondoc = require("swagger-jsdoc");

app.use(express.json())





// const options = {
//     swaggerDefinition: {
//       openapi: "3.0.0",
//       info: {
//         title: "Global Plastic Pollution API",
//         version: "1.0.0",
//         description:
//           "This is an API that was created from real live data on this website: ",
//         license: {
//           name: "MIT",
//           url: "https://thecodebuzz.com"
//         },
//         contact: {
//           name: "Ivonne Rubio",
//           url: "https://www.ivonnerubio.com",
//           email: "irubio081@outlook.com"
//         }
//       },
//       servers: [
//         {
//           url: "./docs"
//         }
//       ]
//     },
//     apis: ["./routes/*.js"]
//     };




// const specs = swaggerJsondoc(options);
// app.use("/docs", swaggerUi.serve);
 
 
// app.get(
//   "/docs",
//   swaggerUi.setup(specs, {
//     explorer: true
//   })
// );


const global_plastic_production_route = require('./routes/global_plastics_production');
const mismanaged_waste_global_total_route = require('./routes/mismanaged_waste_global_total');
const per_capita_mismanaged_route = require('./routes/per_capita_mismanaged');

app.use("/global_plastic_production",global_plastic_production_route);
app.use("/mismanaged_waste_global_total",mismanaged_waste_global_total_route);
app.use("/per_capita_mismanaged",per_capita_mismanaged_route);



app.listen(
    PORT, 
    () => console.log(`api is running on http://localhost:${PORT}`)
);
