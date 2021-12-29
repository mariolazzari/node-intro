import http from "http";

const host = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      console.log(JSON.parse(body));
    });

    res.writeHead(201);
    res.end("Ok");
  } else {
    res.writeHead(200);
    res.end("Hi");
  }
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
