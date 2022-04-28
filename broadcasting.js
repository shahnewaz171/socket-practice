const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(expressServer);


io.on('connection', (socket) => {
    console.log('A user connected');
    // [emit method]On the server-side, we can send an event to all connected users or to a subset of users from a specific space or anything what you need
    socket.emit('broadcast', 'Hello Everyone!');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/broadcasting.html');
});



expressServer.listen(5000, () => {
    console.log('listing on: 5000');
});