const http = require("http");
const url = require("url");

const products = [
    {
        name: "Galaxy S24",
        category: "mobile",
        brand: "samsung"
    },
    {
        name: "iPhone 15",
        category: "mobile",
        brand: "apple"
    },
    {
        name: "Galaxy Tab",
        category: "tablet",
        brand: "samsung"
    },
    {
        name: "Dell Laptop",
        category: "laptop",
        brand: "dell"
    }
];

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === "/products") {

        const category = parsedUrl.query.category;
        const brand = parsedUrl.query.brand;

        const results = products.filter(product => {

            return (
                product.category === category &&
                product.brand === brand
            );

        });

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(results, null, 2));

    } else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Product server running on port 3000");
});