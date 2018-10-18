'use strict'

const mssql = require('mssql');

module.exports = function(databaseConfiguration){  
    
    const poolPromise = new mssql.ConnectionPool(databaseConfiguration).connect();    

    async function executeQuery(myQuery){    
        try{       
            const pool = await poolPromise;
            const result = await pool.request().query(myQuery);
            return result;
        }
        catch(err){
            throw err;
        }           
    }

    return {
        poolPromise: poolPromise,
        executeQuery: executeQuery
    }
}