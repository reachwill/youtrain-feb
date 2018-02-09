var express = require('express');
var socketIO = require('socket.io');
var path = require('path');

const INDEX = path.join(__dirname , 'index.html');

var app = express()
  .use((req,res) => res.sendFile(path.join(__dirname , 'index.html')))
  .listen(3000,function(){
    console.log('server running on port 3000');
  });


var io = socketIO(app);

io.on('connection',function(socket){
  console.log('Client connected');
  socket.on('userSendMsg',function(data){
    console.log(data);
    io.emit('broadcastMsg',data);
  })
});
