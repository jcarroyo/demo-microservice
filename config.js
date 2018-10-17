'use strict'

module.exports = {
    databaseConfiguration: {
        user: 'sa',
        password: 'sax',
        server: '10.200.69.217',
        database: 'A_Vacaciones',
        pool: {
            max: 100,
            min: 0,
            idleTimeoutMillis: 30000
        }
    },
    serverConfiguration: {
        name: 'My Server',
        version: '1.0',
        port: 8080,
        env: 'DEV'
    }
};