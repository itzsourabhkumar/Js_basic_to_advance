const http = require("http");
const fs = require("fs/promises");
const port = 3000;

const requestListener = (req, res) => {
  if (req.url == "/home") {
    fs.readFile(__dirname + "/basic.html").then((content) => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(content);
    });
  } else if (req.url == "/about") {
    res.end(`{message: 'success'}`);
  } else {
    res.end("some text");
  }
};

const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log("server is running on port", port);
});
