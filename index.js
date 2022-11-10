const express = require('express'); //loading express module, similar to import in python
const app = express(); // define instance 
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => { // fuction that tells server what to do when a get request at given route is called
  res.send('<h1>Hello world</h1>'); // req = http request object, res = http response object
});

server.listen(3000, () => { // starts a port and host 
  console.log('listening on *:3000');
});