//Importar o express
const express = require('express');
//Importar o json-server
const jsonServer = require('json-server');

// Criar uma instancia do servidor express
const server = express();

// Criar um roteador com o arquivo db.json 
const router = jsonServer.router('db.json');

//Importa os padrões JsonServer
const middlewares = jsonServer.defaults();

//Define a porta em que o servidor irá rodar
const porta = 3000;

// Configura o servidor para usar os middlewares padrões
server.use(middlewares);
// Configura o servidor para servir arquivos estáticos da pasta 'public'
server.use(express.static('public'));

// Configura o json-server para usar o caminho /api
server.use('/api', router);

// Definindo as rotas para cada página HTML
server.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

server.get('/post', (req, res) => {
    res.sendFile(__dirname + '/public/post.html');
});

server.get('/put', (req, res) => {
    res.sendFile(__dirname + '/public/put.html');
});

server.get('/delete', (req, res) => {
    res.sendFile(__dirname + '/public/delete.html');
});

//Inicia o servidor na porta definida e exibe uma mensagem no console
server.listen(porta, () => {
    console.log(`Express com JSON SERVER está rodando em http://localhost:${porta}`);
});