const net = require('net');
//client create connection

const filePath = './secretProject.txt';
const client = net.createConnection(
  {
    port: 3000
  }, () => {

  });

client.setEncoding('utf8');

//client send infor to server
client.on('connect', () => {
  client.write(filePath);
});

//client interprete data
client.on('data', (data) => {
  //utf-8
 
  console.log("client recevied data;", data);
  //client.end();
});

client.on('end', () => {
  console.log('disconnected from server');
});