const Pool = require('pg').Pool;

// const pool = new Pool({
//     host: "ec2-44-206-11-200.compute-1.amazonaws.com",
//     user: "coygcxxopdzotf",
//     port: 5432,
//     password: "283198649d19785e4443eb52de491a96168ca0f6d35fe4af71319138dfe7d961",
//     database: "d2vnmmfdjvr1k"
// });


const pool = new Pool({
    // host: "ec2-18-215-96-22.compute-1.amazonaws.com",
    // user: "flqhnzhyvzdzpc",
    // port: 5432,
    // password: "d6d6fef78354030186e6106007484725f84adc9a8e87df328fba79d5290f13e8",
    // database: "d1m89etn4def8e"
});


module.exports = pool;