const EventEmitter = require("events");

const orderEvents = new EventEmitter();

orderEvents.on("orderCompleted", (orderName) => {
    console.log(`Completed Order: ${orderName}`);
});

orderEvents.on("orderCompleted", () => {
    console.log("Order confirmation sent.");
});

function processOrder(orderName, callback) {

    setTimeout(() => {

        callback(orderName);

        orderEvents.emit("orderCompleted", orderName);

    }, 2000);
}

processOrder("Laptop", (orderName) => {
    console.log(`Processing completed for: ${orderName}`);
});