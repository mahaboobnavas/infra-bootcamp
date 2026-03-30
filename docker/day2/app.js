const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Docker Multi-stage Build");
});

server.listen(3000);
