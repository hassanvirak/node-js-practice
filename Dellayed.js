function processOrder(orderName, callback) {

    setTimeout(() => {
        callback(orderName);
    }, 2000);
}

processOrder("Laptop", (orderName) => {
    console.log(`Order: ${orderName}`);
    console.log("Order processed successfully.");
});