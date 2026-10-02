const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === "/calculate") {

        const a = Number(parsedUrl.query.a);
        const b = Number(parsedUrl.query.b);
        const operation = parsedUrl.query.operation;

        let result;

        if (operation === "add") {
            result = a + b;
        }

        else if (operation === "subtract") {
            result = a - b;
        }

        else if (operation === "multiply") {
            result = a * b;
        }

        else if (operation === "divide") {

            if (b === 0) {
                res.writeHead(400);
                res.end("Error: Cannot divide by zero.");
                return;
            }

            result = a / b;
        }

        else {
            res.writeHead(400);
            res.end("Error: Invalid operation.");
            return;
        }

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end(`Result: ${result}`);

    } else {

        res.writeHead(404);
        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Calculator server running on port 3000");
});