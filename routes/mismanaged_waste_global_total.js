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



module.exports = router;
