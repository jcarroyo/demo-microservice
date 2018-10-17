'use strict'

module.exports = function(ctx){
    const db = ctx.db,
          server = ctx.server;

    server.get('/vacaciones', (req, res, next) => {
        res.send(200, "OK")
    });
            
}