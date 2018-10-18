'use strict'

module.exports = function(db, server){

    const VacationsDA = require('./vacacionesRepo')(db);

    server.get('/vacaciones', (req, res, next) => {
        return VacationsDA.getAllVacations()
            .then(data => {
                res.send(200, data)
            });
    });            
}