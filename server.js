const net = require('net');
//server looks for requested files locally and sends back the data
//first time create a server
const server = net.createServer((socket) => {
  //socket.end('goodbye\n');

  socket.setEncoding('utf8');

  socket.write("Welcome too your local server, how can I help you");

  socket.on('data', (data) => {
    console.log("server recevied data from client; ", data);
  });


  
  socket.on('error', (err) => {
    //hanlde errors here.
    throw err;
  });


});


server.listen(3000, () => {
  //console.log('opnened server on', server.address());
  console.log('Server listening on port 3000!');
});
