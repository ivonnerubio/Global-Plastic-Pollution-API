const Pool = require('pg').Pool;

// const pool = new Pool({
//     host: "ec2-44-206-11-200.compute-1.amazonaws.com",
//     user: "coygcxxopdzotf",
//     port: 5432,
//     password: "283198649d19785e4443eb52de491a96168ca0f6d35fe4af71319138dfe7d961",
//     database: "d2vnmmfdjvr1k"
// });


const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "",
    database: "global_plastic_pollution_database"
});


module.exports = pool;