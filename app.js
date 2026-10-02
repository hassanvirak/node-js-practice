const querystring = require("querystring");

const product = {
    product: "Laptop",
    price: 50000,
    quantity: 2
};

const query = querystring.stringify(product);

console.log("Query String:");
console.log(query);

const parsedObject = querystring.parse(query);

console.log("\nParsed Object:");
console.log(parsedObject);