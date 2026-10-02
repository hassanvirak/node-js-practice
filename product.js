const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === "/search") {

        const product = parsedUrl.query.product;
        const category = parsedUrl.query.category;

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end(
            `Product: ${product}\nCategory: ${category}`
        );

    } else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

//(Test): http://localhost:3000/search?product=laptop&category=electronics