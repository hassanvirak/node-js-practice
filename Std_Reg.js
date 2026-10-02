const EventEmitter = require("events");

const studentSystem = new EventEmitter();

studentSystem.on("studentRegistered", (name) => {
    console.log("Registered Student:", name);
});

studentSystem.on("studentRegistered", (name) => {
    console.log(`Welcome ${name}!`);
});

studentSystem.on("studentRegistered", () => {
    console.log("Registration completed successfully.");
});

studentSystem.emit("studentRegistered", "Ali");