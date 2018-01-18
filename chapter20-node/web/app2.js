const http = require('http');

const server = http.createServer(function (req, res) {
  if (req.method === 'GET' && req.url === '/favicon.ico') {
    const fs = require('fs');
    const icon = fs.createReadStream('favicon.ico');
    icon.pipe(res);
    // this replaces the call to 'end'
  } else {
    console.log(`${req.method} ${req.url}`);
    res.end('Hello world!');
  }
});

const port = 8080;
server.listen(port, function () {
  // you can pass a callback to listen that lets you know
  // the server has started
  console.log(`server startd on port ${port}`);
});