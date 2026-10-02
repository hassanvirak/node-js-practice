const http = require("http");
const url = require("url");
const querystring = require("querystring");
const EventEmitter = require("events");

const { findStudent } = require("./studentHelper");

const students = [];
const studentEvents = new EventEmitter();

studentEvents.on("studentAdded", (student) => {
    console.log(`Student added: ${student.name}`);
});

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url);
    const query = querystring.parse(parsedUrl.query);

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    if (parsedUrl.pathname === "/students") {

        res.end(JSON.stringify(students));

    }

    else if (parsedUrl.pathname === "/add") {

        if (!query.name || !query.age) {
            res.end("Name and age are required.");
            return;
        }

        const student = {
            name: query.name,
            age: query.age
        };

        students.push(student);

        studentEvents.emit("studentAdded", student);

        res.end("Student added successfully.");

    }

    else if (parsedUrl.pathname === "/search") {

        if (!query.name) {
            res.end("Student name is required.");
            return;
        }

        const student = findStudent(students, query.name);

        if (student) {
            res.end(
                `Student Found:\nName: ${student.name}\nAge: ${student.age}`
            );
        } else {
            res.end("Student not found.");
        }

    }

    else {

        res.writeHead(404);
        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Student server running on port 3000");
});