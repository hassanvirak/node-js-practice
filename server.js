const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to the Node.js Server");
    }

    else if (req.url === "/students" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Students:\n1. Ali\n2. Ahmed\n3. Sara");
    }

    else if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("This server is created using Node.js HTTP module.");
    }

    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});