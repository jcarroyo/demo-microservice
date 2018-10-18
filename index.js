const   config = require('./config'),
        restify = require('restify'),
        restifyPlugins = require('restify-plugins')
const {databaseConfiguration, serverConfiguration} = config;

const server = restify.createServer({
    name: serverConfiguration.name,
    version: serverConfiguration.version
});

const db = require('./src/database')(databaseConfiguration)

server.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
server.use(restifyPlugins.acceptParser(server.acceptable));
server.use(restifyPlugins.queryParser({ mapParams: true }));
server.use(restifyPlugins.fullResponse());

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
