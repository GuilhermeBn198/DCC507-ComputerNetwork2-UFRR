const dgram = require('dgram');
const server = dgram.createSocket('udp4');
 
const host = '0.0.0.0';
const port = 41100;
 
server.on('error', (err) => {
  console.log(err.stack);
  server.close();
});
 
server.on('message', (msg, rinfo) => {
	
	const reply = new Buffer.from('Got [' + msg + ']');
	server.send(reply, 0, reply.length, rinfo.port, rinfo.address, (err, bytes) => {
		if (err){
			console.log(err.stack);
		}
		console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  });
});
 
server.on('listening', () => {
  const address = server.address();
  console.log(`server is listening on ${address.address}:${address.port}`);
});
 
server.bind(port, host);