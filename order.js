const http = require("http");
const url = require("url");
const EventEmitter = require("events");

const orderSystem = new EventEmitter();

orderSystem.on("orderPlaced", (item, quantity) => {
    console.log(`Order: ${item}`);
    console.log(`Quantity: ${quantity}`);
});

orderSystem.on("orderPlaced", () => {
    console.log("Order notification sent.");
});

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === "/order") {

        const item = parsedUrl.query.item;
        const quantity = parsedUrl.query.quantity;

        orderSystem.emit("orderPlaced", item, quantity);

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Order placed successfully.");

    } else {

        res.writeHead(404);
        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});