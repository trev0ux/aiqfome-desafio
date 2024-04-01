const { createServer } = require('json-graphql-server');
const { readFileSync } = require('fs');

// Carrega os dados e o esquema do GraphQL
const data = JSON.parse(readFileSync('data.json', 'utf8'));
const schema = readFileSync('schema.graphql', 'utf8');

// Cria e inicia o servidor GraphQL
const server = createServer({
 data,
 schema,
 port: 4000,
});

server.start(() => console.log('GraphQL server running on http://localhost:4000'));

module.exports = server;