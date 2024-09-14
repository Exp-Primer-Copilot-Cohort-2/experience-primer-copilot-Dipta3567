// Create web server
// Create a web server that listens for requests on port 3000, and responds with "Hello, world!" when it receives a request.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server is running...');
});