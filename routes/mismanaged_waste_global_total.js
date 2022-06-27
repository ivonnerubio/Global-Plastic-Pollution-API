const express = require('express');
const { database } = require('pg/lib/defaults');

const router = express.Router();

const pool = require("/Users/ivonne/Documents/GitHub/Global-Plastic-Pollution-API/data/database/database.js");
// ROUTES

// GET ALL RECORDS
router.get("/",async(req,res)=>{
    try{
        const allRecords = await pool.query("SELECT * FROM mismanaged_waste_global_total");
        res.json(allRecords.rows);
    }
    catch(err){
        console.error(err.message);
    }
});

// GET RECORD BY ID
router.get("/:id",async (req,res) =>{
    try{
        const {id} = req.params;
        const record = await pool.query("SELECT * FROM mismanaged_waste_global_total WHERE id=$1",[id]);
        res.json(record.rows[0]);
    }  
    catch(err){
        console.error(err.message);
    }
});

// POST A NEW RECORD
router.post("/",async (req,res) =>{
    try{
        const {Entity} = req.body;
        const {Code} = req.body;
        const {Year} = req.body;
        const {Mismanaged_waste} = req.body;

        const newRecord = await pool.query(`INSERT INTO mismanaged_waste_global_total (Entity, Code, Year, Mismanaged_waste) VALUES ($1,$2,$3,$4) RETURNING *`,[Entity,Code,Year,Mismanaged_waste]);

        res.json(newRecord.rows[0]);
    }
    catch (err){
        console.error(err.message);
    }
});


module.exports = router;
