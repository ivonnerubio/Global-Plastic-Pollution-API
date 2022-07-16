const express = require('express');
const router = express.Router();
const pool = require("../data/database/database.js");


// /**
//  * @swagger
//  * components:
//  *  schemas:
//  *     Total Global Mismanaged Waste:
//  *          type: object
//  *          required:
//  *              - Entity
//  *              - Year
//  *              - Global Plastic Production
//  *          properties:
//  *           id:
//  *              type: integer
//  *              description: The auto generator primary key/ID of the record
//  *           Entity:
//  *              type: string
//  *              description: The type of entity
//  *           Code: 
//  *              type: string
//  *              description: The code of the entity
//  *           Year: 
//  *              type: integer
//  *              description: The year of the record
//  *           Mismanaged_Waste:
//  *              type: double
//  *              description: The actual amount of global mismanaged waste for the year
//  *          Example:    
//  *              id: 1
//  *              entity: Albania
//  *              Code: ALB
//  *              Year: 2010
//  *              Mismanaged_Waste: 0.0933
//  *              
//  *              
// */

// /**
//  * @swagger
//  * tags:
//  *      name: Total Global Mismanaged Waste
//  *      description: The Total Global Mismanaged Waste api
//  * 
//  */

// /**
//  * @swagger
//  * /mismanaged_waste_global_total:
//  *      get:
//  *          summary: Returns a list of records of the global plastics
//  *          tags: [Total Global Mismanaged Waste]
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
router.get("/",async(req,res) =>{
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    
    pool.query("SELECT * FROM mismanaged_waste_global_total", (err, results) => {
        if (err) {
            console.log(err); 
            throw err;
        }
        res.json(results.rows);
        });
});




// /**
//  * @swagger
//  * /mismanaged_waste_global_total/:id:
//  *      get:
//  *          summary: Returns a list of records of the global plastics
//  *          tags: [Total Global Mismanaged Waste]
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
router.get("/:id",async(req,res) =>{
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    const {id} = req.params;
    pool.query("SELECT * FROM mismanaged_waste_global_total WHERE id=$1",[id], (err, results) => {
        if (err) {
            console.log(err); 
            throw err;
        }
        res.json(results.rows[0]);
        });
});



// /**
//  * @swagger
//  * /mismanaged_waste_global_total:
//  *      post:
//  *          summary: Returns a list of records of the global plastics
//  *          tags: [Total Global Mismanaged Waste]
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
router.post("/",async (req,res) =>{
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    const {entity, code, year, mismanaged_waste} = req.body;

    pool.query(`INSERT INTO mismanaged_waste_global_total (Entity,Code,Year,Mismanaged_waste) VALUES ($1, $2, $3, $4)`, 
        [entity, code, year, mismanaged_waste], 
        (err, results) => {
        if (err) {
            console.log(err); 
            throw err;
        }
        res.send("Record sucessfully added!");
    });
});

// /**
//  * @swagger
//  * /mismanaged_waste_global_totals/:id:
//  *      patch:
//  *          summary: Returns a list of records of the global plastics
//  *          tags: [Total Global Mismanaged Waste]
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
router.patch("/:id",async(req,res) =>{
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    const {id} = req.params;
    const {entity, code, year, mismanaged_waste} = req.body;

    if(entity){
        pool.query(`UPDATE mismanaged_waste_global_total SET Entity = $1 WHERE id=$2`, 
        [entity, id], 
        (err, results) => {
        if (err) {
            console.log(err); 
            throw err;
        }
        res.send("Entity updated successfully!");
    })}

    if(code){
        pool.query(`UPDATE mismanaged_waste_global_total SET Code = $1 WHERE id=$2`, 
        [code, id], 
        (err, results) => {
        if (err) {
            console.log(err); 
            throw err;
        }
        res.send("Code updated successfully!");
    })}

    if(year){
        pool.query(`UPDATE mismanaged_waste_global_total SET Year = $1 WHERE id=$2`, 
        [year, id], 
        (err, results) => {
        if (err) {
            console.log(err); 
            throw err;
        }
        res.send("Year updated successfully!");
    })}

    if(Mismanaged_waste){
        pool.query(`UPDATE mismanaged_waste_global_total SET Mismanaged_waste = $1 WHERE id=$2`, 
        [Mismanaged_waste, id], 
        (err, results) => {
        if (err) {
            console.log(err); 
            throw err;
        }
        res.send("Mismanaged Waste updated successfully!");
    })}
});


// /**
//  * @swagger
//  * /mismanaged_waste_global_total/:id:
//  *      delete:
//  *          summary: Returns a list of records of the global plastics
//  *          tags: [Total Global Mismanaged Waste]
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
router.delete("/:id",async (req,res) =>{
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    const {id} = req.params;
    pool.query("DELETE FROM mismanaged_waste_global_total WHERE id=$1",[id], (err, results) => {
        if (err) {
            console.log(err); 
            throw err;
        }
        res.json("Record deleted successfully");
        });
});


module.exports = router;