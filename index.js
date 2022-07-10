const express = require('express');
const app = express();


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



// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});