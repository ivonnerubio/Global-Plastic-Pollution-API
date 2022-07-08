const express = require('express');
const app = express();

 





app.get('/', (req, res) => {
    res
      .status(200)
      .send('Hello, world!')
});

const global_plastic_production_route = require('./routes/global_plastics_production.js');

app.use("/global_plastic_production",global_plastic_production_route);



// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});