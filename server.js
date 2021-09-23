const net = require('net');
const fs = require('fs');
//server looks for requested files locally and sends back the data
//first time create a server
const server = net.createServer((socket) => {
  //socket.end('goodbye\n');

  socket.setEncoding('utf8');

  socket.write("Welcome too your local server, how can I help you");

  socket.on('data', (da) => {
    console.log("server recevied data from client; ", da);
    //check if file path is okay use fs access to check asyn without opening it
    fs.access(da, fs.F_OK, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("The file is avialable");
      socket.write("waiting",() => {
        fs.readFile(da,'utf8',(err, data) => {
          if (err) throw err;
          console.log("This file has content:", data);
          socket.write(data);
        });
      });
      //open the file and send directly
      
    });
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
