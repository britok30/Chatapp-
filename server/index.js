const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const io = socketio(server);

server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
