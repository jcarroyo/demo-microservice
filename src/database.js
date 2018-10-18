'use strict'

const mssql = require('mssql');

module.exports = function(databaseConfiguration){  
    
    const poolPromise = new mssql.ConnectionPool(databaseConfiguration).connect()
    .then(pool => {
        console.log('Connected to MSSQL')
        return pool
    })
    .catch(err => {
        console.log('Database Connection Failed! Bad Config: ', err)
    });

    async function executeQuery(myQuery){    
        try{       
            const pool = await poolPromise;
            const result = await pool.request().query(myQuery);
            return result;
        }
        catch(err){
            console.log(err);
            throw err;
        }           
    }

    return {
        executeQuery: executeQuery
    }
}