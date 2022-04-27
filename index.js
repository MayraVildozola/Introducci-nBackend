const http = require('http');

const hostname = '172.16.2.145';

const port = 3000;
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Hola Mundo</h1>');

});

server.listen(port, hostname,()=>{
    console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`);

});