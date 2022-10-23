const net = require("net");

const host = "127.0.0.1";
const port = 5000;

const client = net.createConnection(port, host, () => {
    setTimeout(function () {
        console.log("Connected");
    }, 1000)
    client.write(`add,1,1`); //you can modify these numbers to test the server!
    setTimeout(function () {
        client.end()
    }, 4000)
});

client.on("data", (data) => {
    console.log(`Received: ${data}`);
});

client.on("error", (error) => {
    console.log(`Error: ${error.message}`);
});

client.on("close", () => {
    console.log("Connection closed");
});