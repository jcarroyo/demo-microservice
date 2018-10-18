'use strict'

module.exports = {
    databaseConfiguration: {
        user: 'sa',
        password: process.env.ADRYANDBPASSWORD,
        server: '10.200.69.217',
        database: 'A_Vacaciones',
        pool: {
            max: 100,
            min: 0,
            idleTimeoutMillis: 30000
        },
        parseJSON: true
    },
    serverConfiguration: {
        name: 'My Server',
        version: '1.0',
        port: process.env.PORT || 8080,
        env: process.env.NODE_ENV || 'development'
    }
};