// const Pool = require('pg').Pool;
// const pool = new Pool({
//     host: "ec2-18-215-96-22.compute-1.amazonaws.com",
//     user: "flqhnzhyvzdzpc",
//     port: 5432,
//     password: "d6d6fef78354030186e6106007484725f84adc9a8e87df328fba79d5290f13e8",
//     database: "d1m89etn4def8e"
// });

const {Pool} = require('pg');

const connectStr = process.env.DATABASE_URL;
const pool = new Pool({
    connectionString: connectStr,
    ssl: true
});



module.exports = pool;