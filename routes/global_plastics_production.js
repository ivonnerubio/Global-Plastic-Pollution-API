const express = require('express');
const { database } = require('pg/lib/defaults');

const router = express.Router();

const pool = require("./data/database/database.js");

/**
 * @swagger
 * components:
 *  schemas:
 *      Global Plastic Production:
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
 *           Global Plastic Production:
 *              type: integer
 *              description: The actual amount of global plastic production for the year
 *              
*/

/**
 * @swagger
 * tags:
 *      name: Global Plastic Production
 *      description: The global_plastic_production api
 * 
 */

/**
 * @swagger
 * /global_plastics_production:
 *      get:
 *          summary: Returns a list of records of the global plastics
 *          tags: [Global Plastic Production]
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
router.get("/global_plastics_production",async(req,res) =>{
    try{
        const records = await pool.query("SELECT * FROM global_plastic_production");
        res.json(records.rows)
    }
    catch(err){
        console.error(err.message);
    }
});

/**
 * @swagger
 * /global_plastics_production/:id:
 *      get:
 *          summary: Returns a list of records of the global plastics
 *          tags: [Global Plastic Production]
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
router.get('/global_plastics_production/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const record = await pool.query("SELECT * FROM global_plastic_production WHERE id=$1",[id]);
        res.json(record.rows[0]);

    }
    catch(error){
        console.error(err.message);
    }
});

// /**
//  * @swagger
//  * /global_plastics_production/:year:
//  *      get:
//  *          summary: Returns a list of records of the global plastics
//  *          tags: [Global Plastic Production]
//  *          responses:
//  *              200:
//  *                  description: all records hosted
//  *                  content:
//  *                      application/json:
//  *                          schema:
//  *                              type: array
//  *                              items:
//  *                                  $ref: '#/components/schemas/Global Plastic Production'
//  *                              
//  * 
//  */
//  router.get('year/:id', async(req,res)=>{
//     try{
//         const {year} = req.params;
//         const record = await pool.query("SELECT * FROM global_plastic_production WHERE year=$1",[year]);
//         res.json(record.rows[0]);

//     }
//     catch(error){
//         console.error(err.message);
//     }
// });


/**
 * @swagger
 * /global_plastics_production:
 *      post:
 *          summary: Returns a list of records of the global plastics
 *          tags: [Global Plastic Production]
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
router.post("/global_plastics_production",async(req,res) =>{
    try{
        const {Entity} = req.body;
        const {Code} = req.body;
        const {Year} = req.body;
        const {Global_plastics_production} = req.body;
        const record = await pool.query(`INSERT INTO global_plastic_production(Entity,Code,Year,Global_plastics_production) VALUES ($1,$2,$3,$4) RETURNING * `,
        [Entity,Code,Year,Global_plastics_production]
        );

        res.json(record.rows[0]);
    }
    catch (err){
        console.error(err.message);
    }
});

// /**
//  * @swagger
//  * /global_plastics_production/:id:
//  *      patch:
//  *          summary: Returns a list of records of the global plastics
//  *          tags: [Global Plastic Production]
//  *          responses:
//  *              200:
//  *                  description: all records hosted
//  *                  content:
//  *                      application/json:
//  *                          schema:
//  *                              type: array
//  *                              items:
//  *                                  $ref: '#/components/schemas/Global Plastic Production'
//  *                              
//  * 
//  */
// router.patch("/:id",async(req,res)=>{

// });


/**
 * @swagger
 * /global_plastics_production/:id:
 *      delete:
 *          summary: Returns a list of records of the global plastics
 *          tags: [Global Plastic Production]
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
router.delete("/global_plastics_production/:id", async(req,res)=>{
    try{
        const {id} = req.params;
        const record = await pool.query("DELETE FROM global_plastic_production WHERE id = $1", [id]);
        res.json("Record deleted successfully");
    }
    catch(err){
        console.error(err.message);
    }
});


module.exports = router;