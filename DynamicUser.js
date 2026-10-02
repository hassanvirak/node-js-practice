const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === "/greet") {

        const name = parsedUrl.query.name;
        const city = parsedUrl.query.city;

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        if (!name || !city) {
            res.end("Name and city are both required.");
            return;
        }

        res.end(`Hello ${name}!\nYou are from ${city}.`);

    } else {

        res.writeHead(404);
        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});