// Create web server
// Create a web server using the http module and express module
// Create a web server using the http module and express module
const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server is running...');
});
//



