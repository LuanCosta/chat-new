const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
    res.send('Servidor OK!');
    console.log('Logou aqui');

});

io.on('connection', (socket) => {
    console.log('Novo cliente conectado');
    socket.on('disconnect', () => console.log('Cliente desconect'));
});

server.listen(5000, () => console.log('Servidor rodando na porta 5000')); 