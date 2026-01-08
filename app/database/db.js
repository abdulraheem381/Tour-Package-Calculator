const mysql = require('mysql2');

// Create the connection pool. The pool allows executing queries.
// The pool will handle the connection to the database.
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'commit2prod_storefront',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Export the promise-based wrapper
module.exports = pool.promise();
