const dgram = require('dgram');
const client = dgram.createSocket('udp4');
 
const host = '0.0.0.0';
const port = 41100;
 
const message = new Buffer.from('message from client!');
 
client.on('message', (message, remote) => {
  console.log('Server: ' + message);
});
 
client.send(message, 0, message.length, port, host, (err, bytes) => {
  if (err) {
    throw err;
  }
  console.log('Message sent');
});