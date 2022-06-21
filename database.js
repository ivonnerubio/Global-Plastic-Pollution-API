const Pool = require('pg').Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "",
    database: "global_plastic_pollution_database"
});

module.exports = pool;

// client.query(`CREATE TABLE table_name`,(error,res)=>{
//         console.log(error.message);
    
//     client.end;
//     });
    

// client.query(`SELECT * from users`, (error,res)=>{
//     if(!error){
//         console.log(res.rows);
//     }else{
//         console.log(error.message);
//     }
//     client.end;
// })

