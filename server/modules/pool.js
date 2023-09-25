const pg = require("pg");

const pool = new pg.Pool({
    database: 'react_gallery',
    host: 'localhost',
    port: 5432,
    
});

// pool.on('connect', () => {
//     console.log('Connected to the PostgreSQL database.');
// });

// pool.on('remove', () => {
//     console.log('Removed client from pool.');
//     process.exit();
// });

module.exports = pool;
