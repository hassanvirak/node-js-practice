const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === "/search") {

        const name = parsedUrl.query.name;
        const age = parsedUrl.query.age;

        res.writeHead(200, { "Content-Type": "text/plain" });

        if (!name) {
            res.end("Student name is required.");
        } else {
            res.end(`Student Name: ${name}\nStudent Age: ${age || "Not provided"}`);
        }

    } else {
        res.writeHead(404);
        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});