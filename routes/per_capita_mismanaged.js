const express = require('express');
const { database } = require('pg/lib/defaults');

const router = express.Router();

const pool = require("/Users/ivonne/Documents/GitHub/Global-Plastic-Pollution-API/data/database/database.js");
// ROUTES

/**
 * @swagger
 * components:
 *  schemas:
 *      Per Capita Mismanaged Plastic:
 *          type: object        
 *          required:
 *              - Entity
 *              - Year
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
 *           Per capita mismanaged plastic waste:
 *              type: double
 *              description: The actual amount of global mismanaged waste for the year
 *           GDP per capita: 
 *              type: double
 *              description: The GDP per capita
 *           Total Population:
 *              type: integer
 *              description: The total population
 *           Continent:
 *              type: string
 *              description: The continent of the record
 *          Example:    
 *              id: 1
 *              entity: Albania
 *              Code: ALB
 *              Year: 2010
 *              Mismanaged_Waste: 0.0933
 *              
 *              
*/

/**
 * @swagger
 * tags:
 *      name: Per Capita Mismanaged Plastic
 *      description: The global_plastic_production api
 * 
 */

/**
 * @swagger
 * /per_capita_mismanaged:
 *      get:
 *          summary: Returns a list of records of the global plastics
 *          tags: [Per Capita Mismanaged Plastic]
 *          responses:
 *              200:
 *                  description: all records hosted
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Global Plastic Production'
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


/**
 * @swagger
 * /per_capita_mismanaged/:id:
 *      get:
 *          summary: Returns a list of records of the global plastics
 *          tags: [Per Capita Mismanaged Plastic]
 *          responses:
 *              200:
 *                  description: all records hosted
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Global Plastic Production'
 *                              
 * 
 */
router.get("/:id",async (req,res) =>{
    try{
        const {id} = req.params;
        const record = await pool.query("SELECT * FROM per_capita_mismanaged WHERE id=$1",[id]);
        res.json(record.rows[0]);
    }  
    catch(err){
        console.error(err.message);
    }
});


/**
 * @swagger
 * /per_capita_mismanaged:
 *      post:
 *          summary: Returns a list of records of the global plastics
 *          tags: [Per Capita Mismanaged Plastic]
 *          responses:
 *              200:
 *                  description: all records hosted
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Global Plastic Production'
 *                              
 * 
 */
router.post("/",async (req,res) =>{
    try{
        const {Entity} = req.body;
        const {Code} = req.body;
        const {Year} = req.body;
        const {Per_capita_mismanaged_plastic_waste} = req.body;
        const {Gdp_per_capita} = req.body;
        const {Total_population} = req.body;
        const {Continent} = req.body;

        const record = await pool.query(`INSERT INTO per_capita_mismanaged (Entity, Code, Year, Per_capita_mismanaged_plastic_waste,Gdp_per_capita,Total_population,Continent) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,[Entity,Code,Year,Per_capita_mismanaged_plastic_waste, Gdp_per_capita,Total_population,Continent]);

        res.json(record.rows[0]);
    }
    catch (err){
        console.error(err.message);
    }
});


/**
 * @swagger
 * /per_capita_mismanaged:
 *      patch:
 *          summary: Returns a list of records of the global plastics
 *          tags: [Per Capita Mismanaged Plastic]
 *          responses:
 *              200:
 *                  description: all records hosted
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Global Plastic Production'
 *                              
 * 
 */
router.patch("/:id",async(req,res)=>{

});


/**
 * @swagger
 * /per_capita_mismanaged:
 *      delete:
 *          summary: Returns a list of records of the global plastics
 *          tags: [Per Capita Mismanaged Plastic]
 *          responses:
 *              200:
 *                  description: all records hosted
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Global Plastic Production'
 *                              
 * 
 */
router.delete("/:id",async (req,res) =>{
    try{
        const {id} = req.params;
        const record = await pool.query("DELETE FROM per_capita_mismanaged WHERE id=$1",[id]);
        res.json(record.rows[0]);
    }  
    catch(err){
        console.error(err.message);
    }
});


module.exports = router;
