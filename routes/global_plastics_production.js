const express = require('express');
const router = express.Router();
const pool = require("../data/database/database.js");

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
router.get("/",async(req,res) =>{
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    
    pool.query("select * from global_plastic_production", (err, results) => {
        if (err) {
            console.log(err); 
            throw err;
        }
        res.json(results.rows);
        });
});

/**
 * @swagger
 * /global_plastics_production/:id:
 *      get:
 *          summary: Returns a list of rsecords of the global plastics
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
router.get("/:id",async(req,res) =>{
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    const {id} = req.params;
    pool.query("SELECT * FROM global_plastic_production WHERE id=$1",[id], (err, results) => {
        if (err) {
            console.log(err); 
            throw err;
        }
        res.json(results.rows[0]);
        });
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
router.post("/",async(req,res) =>{
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    const { entity, code, year, global_plastics_production} = req.body;

    pool.query(`INSERT INTO global_plastic_production (Entity,Code,Year,Global_plastics_production) VALUES ($1, $2, $3, $4)`, 
        [entity, code, year, global_plastics_production], 
        (err, results) => {
        if (err) {
            console.log(err); 
            throw err;
        }
        res.send("Record sucessfully added!");
        });
});



/**
 * @swagger
 * /global_plastics_production/:id:
 *      patch:
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
router.patch("/:id",async(req,res) =>{
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    const {id} = req.params;

    const {entity, code, year, global_plastics_production} = req.body;

    if(entity){
        pool.query(`UPDATE global_plastic_production SET Entity = $1 WHERE id=$2`, 
        [entity, id], 
        (err, results) => {
        if (err) {
            console.log(err); 
            throw err;
        }
        res.send("Record updated successfully!");
    })}

    if(code){
        pool.query(`UPDATE global_plastic_production SET Code = $1 WHERE id=$2`, 
        [code, id], 
        (err, results) => {
        if (err) {
            console.log(err); 
            throw err;
        }
        res.send("Record updated successfully!");
    })}

    if(year){
        pool.query(`UPDATE global_plastic_production SET Year = $1 WHERE id=$2`, 
        [year, id], 
        (err, results) => {
        if (err) {
            console.log(err); 
            throw err;
        }
        res.send("Record updated successfully!");
    })}

    if(global_plastics_production){
        pool.query(`UPDATE global_plastic_production SET Global_plastics_production = $1 WHERE id=$2`, 
        [global_plastics_production, id], 
        (err, results) => {
        if (err) {
            console.log(err); 
            throw err;
        }
        res.send("Record updated successfully!");
    })}
});



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
router.delete("/:id", async(req,res)=>{
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    const {id} = req.params;
    pool.query("DELETE FROM global_plastic_production WHERE id = $1", [id], (err, results) => {
        if (err) {
            console.log(err); 
            throw err;
        }
        res.json("Record deleted successfully");
        });
});




module.exports = router;