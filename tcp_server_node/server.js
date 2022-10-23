/*
TCP server algorithm for sum and subtration of a data sequence send by the client, which can be tested with:
* example 1:  add,1,1
* example 2: add,2,2
* example 3: add,3,4
* example 4: sub,4,2.0
* example 5: sub,7.5,4.5
*/


const net = require("net");

const port = 5000;
let i = 0;

const server = net.createServer((socket) => {
    console.log(`Client ${i=i+1} connected!`);

    socket.on("data", (data) => {
        const strData = data.toString();
        console.log(`Received: ${strData}`);

        const command = strData.split(",");
        const operator = command[0];
        const operand1 = parseFloat(command[1]);
        const operand2 = parseFloat(command[2]);
        let result;

        switch (operator) {
            case "add":
                result = operand1 + operand2;
                break;
            case "sub":
                result = operand1 - operand2;
                break;
        }

		setTimeout(function (){
			console.log(`sent: ${result.toString()}`)
			socket.write(result.toString());
		}, 2000)
    });

    socket.on("end", () => {
        console.log("Client disconnected");
    });

    socket.on("error", (error) => {
        console.log(`Socket Error: ${error.message}`);
    });
});

server.on("error", (error) => {
    console.log(`Server Error: ${error.message}`);
});

server.listen(port, () => {
    console.log(`TCP socket server is running on port: ${port}`);
});