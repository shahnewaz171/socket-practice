const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(expressServer);

const buynsp = io.of('/buy');
buynsp.on('connection', (socket) => {
    console.log('a buyer connected')
    buynsp.emit('myEvent', 'Hello buy')
});

const sellnsp = io.of('/sell');
sellnsp.on('connection', (socket) => {
    console.log('a seller connected')
    sellnsp.emit('', 'Hello sell');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/nameSpace.html');
});



expressServer.listen(5000, () => {
    console.log('listing on: 5000');
});