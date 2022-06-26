const express = require('express');
const app = express();
const PORT = 8080;

const pool = require("./data/database/database");

app.use(express.json())

// ROUTES

// GET ALL RECORDS
app.get("/mismanaged-waste-global-total",async(req,res)=>{
    try{
        const allRecords = await pool.query("SELECT * FROM mismanaged-waste-global-total");
        res.json(allRecords.rows);
    }
    catch(err){
        console.error(err.message);
    }
});


app.listen(
    PORT, 
    () => console.log(`api is running on http://localhost:${PORT}`)
);
