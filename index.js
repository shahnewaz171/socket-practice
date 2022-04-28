const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(expressServer);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('inputValue', (msg) => {
        console.log(msg);
    })

    // setTimeout(() => {
    //     socket.send('Muhammad Shahnewaz (Data server to client)')
    // }, 5000)

    // setInterval(() => {
    //     let date = new Date();
    //     let time = date.getTime();
    //     // socket.send(time);
    //     // custom event [we can create custom event on the server by using socket emit m method]
    //     socket.emit('myevent', time);
    // }, 2000)

    // socket.on('disconnect', () => {
    //     console.log('user disconnected');
    // });
});

expressServer.listen(5000, () => {
    console.log('listing on: 5000');
});