const http = require("http");

const host = "127.0.0.1";
const port = "8000";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("Hello World\n");
});

server.listen(port, host, () => {
  console.log(`server is running at http://${host}:${port}`);
});
