const mysql = require('mysql2');
const { promisify } = require('util');

/*const database = require('./keys');*/

const pool = mysql.createPool({
    host: 'localhost',
    user: 'hbtn_user2',
    password: 'Password_1234',
    database: 'whitesoftdb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTECOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
        if (err.code === 'ER_NOT_SUPPORTED_AUTH_MODE') {
            console.error('CAN NOT STORE DATA');
        }

    }
    if (connection) connection.release();
    console.log('DB is connected');
    return;
});

//Promisify Pool Querys
pool.query = promisify(pool.query)

module.exports = pool;