const   config = require('./config'),
        restify = require('restify'),
        restifyPlugins = require('restify-plugins')
const {databaseConfiguration, serverConfiguration} = config;

const server = restify.createServer({
    name: serverConfiguration.name,
    version: serverConfiguration.version
});

server.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
server.use(restifyPlugins.acceptParser(server.acceptable));
server.use(restifyPlugins.queryParser({ mapParams: true }));
server.use(restifyPlugins.fullResponse());


const db = require('./src/database')(databaseConfiguration)
db.poolPromise.then(pool => {
    console.log('Conectado a MSSQL')
    return pool
})
.catch(err => {
    console.log('Error con la conexión de la BD', err);
    process.exit(1);
});

server.listen(serverConfiguration.port, () => {
    console.log(
        '%s v%s ready to accept connections on port %s in %s environment.',
        serverConfiguration.name,
        serverConfiguration.version,
        serverConfiguration.port,
        serverConfiguration.env
    )
    require('./src/routes')(db, server)   
});

server.on('error', (err) => {
    console.log("Error con el servidor web");
    console.log(err);
})

