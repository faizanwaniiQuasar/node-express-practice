const http = require("http");
const port = 5000;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(
      `Hello from the server this server is running on port ${port} THis is main home page`
    );
    res.end();
  } else if (req.url === "/about") {
    res.write(` about page page`);
    res.end();
  } else {
    res.write("error 404");
    res.end();
  }
});

server.listen(port);
