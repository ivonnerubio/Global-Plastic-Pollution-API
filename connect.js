const{Client} = require('pg');
require('dotenv').config();

(async () =>{
    const client = new Client({
        host: process.env.host,
        port: process.env.port,
        user: process.env.user,
        password: process.env.password,
        database: proccess.env.database,
        ssl:false
    });

    await client.connect();
    const res = await client.query('SELECT $1::text as connected', ['Connection to postgres successful!']);
    console.log(res.rows[0].connected);
    await client.end();
});

