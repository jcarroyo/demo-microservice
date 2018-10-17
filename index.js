const   config = require('./config'),
        restify = require('restify'),
        mssql = require('mssql');
const {databaseConfiguration, serverConfiguration} = config;

const server = restify.createServer({
    name: serverConfiguration.name,
    version: serverConfiguration.version
});

/*
server.use(restify.jsonBodyParser({ mapParams: true }))
server.use(restify.acceptParser(server.acceptable))
server.use(restify.queryParser({ mapParams: true }))
server.use(restify.fullResponse())*/

server.listen(serverConfiguration.port, () => {
    console.log(
        '%s v%s ready to accept connections on port %s in %s environment.',
        serverConfiguration.name,
        serverConfiguration.version,
        serverConfiguration.port,
        serverConfiguration.env
    )    
});