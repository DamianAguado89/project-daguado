var dotenv = require('dotenv').config
dotenv();

const config = {
    port : process.env.PORT || 4000,
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbServer: process.env.DB_SERVER || '',
    dbDatabase: process.env.DB_DATABASE || ''
}

module.exports = config;