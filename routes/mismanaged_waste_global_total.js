const express = require('express');
const { database } = require('pg/lib/defaults');

const router = express.Router();

const pool = require("/Users/ivonne/Documents/GitHub/Global-Plastic-Pollution-API/data/database/database.js");


/** 
 * @swagger
 * tags:
 *   name: Total Global Mismanaged Waste
 *   description: API to for the Total Global Mismanaged Waste
*/

/**
 * @swagger
 * components:
 *  schemas:
 *     Total Global Mismanaged Waste:
 *          type: object
 *          required:
 *              - Entity
 *              - Year
 *              - Global Plastic Production
 *          properties:
 *           id:
 *              type: integer
 *              description: The auto generator primary key/ID of the record
 *           Entity:
 *              type: string
 *              description: The type of entity
 *           Code: 
 *              type: string
 *              description: The code of the entity
 *           Year: 
 *              type: integer
 *              description: The year of the record
 *           Mismanaged_Waste:
 *              type: double
 *              description: The actual amount of global mismanaged waste for the year
 *          Example:    
 *              id: 1
 *              entity: Albania
 *              Code: ALB
 *              Year: 2010
 *              Mismanaged_Waste: 0.0933
 *              
 *              
*/
router.get("/",async(req,res)=>{	    
    try{
        const records = await pool.query("SELECT * FROM per_capita_mismanaged");
        res.json(records.rows);
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

        const record = await pool.query(`INSERT INTO mismanaged_waste_global_total (Entity, Code, Year, Mismanaged_waste) VALUES ($1,$2,$3,$4) RETURNING *`,[Entity,Code,Year,Mismanaged_waste]);

        res.json(record.rows[0]);
    }
    catch (err){
        console.error(err.message);
    }
});

// UPDATE RECORD
router.patch("/:id",async(req,res)=>{

});



// DELETE RECORD BY ID
router.delete("/:id",async (req,res) =>{
    try{
        const {id} = req.params;
        const record = await pool.query("DELETE FROM mismanaged_waste_global_total WHERE id=$1",[id]);
        res.json(record.rows[0]);
    }  
    catch(err){
        console.error(err.message);
    }
});



module.exports = router;