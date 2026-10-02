const calculator = require("./calculator");

function calculate(a, b, operation, callback) {

    let result;

    if (operation === "add") {
        result = calculator.add(a, b);
    }
    else if (operation === "subtract") {
        result = calculator.subtract(a, b);
    }
    else if (operation === "multiply") {
        result = calculator.multiply(a, b);
    }
    else {
        return callback("Invalid operation", null);
    }

    callback(null, result);
}

calculate(10, 5, "add", (error, result) => {

    if (error) {
        console.log(error);
    } 
    else {
        console.log("Result:", result);
    }

});