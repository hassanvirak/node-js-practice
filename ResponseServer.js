const http = require("http");

const {
    successResponse,
    errorResponse,
    notFoundResponse
} = require("./response");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        successResponse(res, "Welcome to the server");
    }

    else if (req.url === "/error") {
        errorResponse(res, "Something went wrong.");
    }

    else if (req.url === "/about") {
        successResponse(res, "This is the About page");
    }

    else {
        notFoundResponse(res);
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});