const fs = require("fs");
const http = require("http");
const url = require("url");

// SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/overview" || pathName === "/") {
    res.end("Hello from the overview page!");
  } else if (pathName === "/product") {
    res.end("Hello from the products page!");
  } else if (pathName === "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      const products = JSON.parse(data);
      console.log(data);
    });
    res.end("API");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world!",
    });
    res.end("<h1>Page not found!</h1>");
  }

  res.end("Hello from the server!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server has been started, listening to port 8000.");
});
