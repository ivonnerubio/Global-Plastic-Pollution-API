const Pool = require('pg').Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "",
    database: "global_plastic_pollution_database"
});


module.exports = pool;