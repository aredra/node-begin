const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    console.log(req.url);
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'thext/plain');
        res.end('Hello World\n');
    } else if (req.url === '/users') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'thext/plain');
        res.end('User List\n');
    } else {
        res.statusCode = 404;
        res.end('Not Found\n');
    }


});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});