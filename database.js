const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "",
    database: "globalplasticproductionapi"
});

client.connect();

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

