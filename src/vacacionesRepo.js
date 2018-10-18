'use strict'

module.exports = function(db){
    async function getAllVacations(){
        try{
            const result = await db.executeQuery('select * from dbo.Vacaciones');
            return result.recordset;
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }

    return {
        getAllVacations: getAllVacations
    }
}