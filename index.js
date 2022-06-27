const express = require('express');
const app = express();
const PORT = 8080;

const pool = require("./data/database/database");

app.use(express.json())

const global_plastic_production_route = require('./routes/global_plastics_production');
const mismanaged_waste_global_total_route = require('./routes/mismanaged_waste_global_total');

app.use('/global_plastic_production',global_plastic_production_route);
app.use('/mismanaged_waste_global_total',mismanaged_waste_global_total_route);



app.listen(
    PORT, 
    () => console.log(`api is running on http://localhost:${PORT}`)
);
