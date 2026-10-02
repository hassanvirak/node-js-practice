function successResponse(res, message) {

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end(message);
}

function errorResponse(res, message) {

    res.writeHead(400, {
        "Content-Type": "text/plain"
    });

    res.end(message);
}

function notFoundResponse(res) {

    res.writeHead(404, {
        "Content-Type": "text/plain"
    });

    res.end("404 - Page Not Found");
}

module.exports = {
    successResponse,
    errorResponse,
    notFoundResponse
};