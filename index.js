const express = require('express'); //loading express module, similar to import in python
const app = express(); // define instance 
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
app.use(express.static("Public")); // serves static files such as css

app.get('/', (req, res) => { // fuction that tells server what to do when a get request at given route is called, req = http request object, res = http response object
  res.sendFile(__dirname + '/index.html');  
});

io.on('connection', (socket) => { 
    socket.on('chat message', (msg) => {// event listener
      io.emit('chat message', msg) // broadcast msg to all clients
    });
  });

server.listen(3000, () => { // starts a port and host, listens for request from client
  console.log('listening on *:3000');
});