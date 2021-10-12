var sql = require('mssql');
var confing = require('../config');

const dbSettings = {
    user: confing.dbUser,
    password: confing.dbPassword,
    server: confing.dbServer,
    database: confing.dbDatabase,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }
}

exports.getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error)
    }
}

