const express = require('express');
const app = express();
const PORT = 8080;

const pool = require("./database");

app.use(express.json())

// ROUTES

//get ALL Records
app.get("/global_plastic_production",async(req,res) =>{
    try{
        const allRecords = await pool.query("SELECT * FROM global_plastic_production");
        res.json(allRecords.rows)
    }
    catch(err){
        console.error(err.message);
    }
});

// GET RECORD BY ID
app.get('/global_plastic_production/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const record = await pool.query("SELECT * FROM global_plastic_production WHERE id=$1",[id]);
        res.json(record.rows[0]);

    }
    catch(error){
        console.error(err.message);
    }
});



//get a route

// POST NEW RECORD
app.post("/global_plastic_production",async(req,res) =>{
    try{
        let data = req.body;
        const {Entity} = req.body;
        const {Code} = req.body;
        const {Year} = req.body;
        const {Global_plastics_production} = req.body;
        const newRecord = await pool.query(`INSERT INTO global_plastic_production(Entity,Code,Year,Global_plastics_production) VALUES ($1,$2,$3,$4) RETURNING * `,
        [Entity,Code,Year,Global_plastics_production]
        );
        console.log(newRecord);

        res.json(newRecord.rows[0]);
    }
    catch (err){
        console.error(err.message);
    }
});



// delete


app.listen(
    PORT, 
    () => console.log(`api is running on http://localhost:${PORT}`)
);
