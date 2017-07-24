const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}


// app.use(morgan());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/css', express.static(__dirname+'/public/css'));
app.use('/js', express.static(__dirname+'/public/js'));
app.use('/assets', express.static(__dirname+'/public/assets'));
app.use('/', function(req, res){
  res.sendFile(__dirname+'/public/index.html');
})




let tanks = [];
io.on('connection', function(socket){
  console.log(socket.id);
  socket.on('addPlayer', function(){
    console.log(socket.id);
    let x;
    let y;
    if (tanks.length === 0){
      x =325;
      y =175;
    }else{
      x = 975;
      y = 525;
    }
    let newPlayer = {
      x:x,
      y:y,
      id: socket.id
    }
    tanks.push(newPlayer)
    socket.emit('addTank', newPlayer);
  });
  socket.on('disconnect', function(){
    console.log(socket.id);
  })
  socket.on('allPlayers', function(){
    console.log(socket.id);
    console.log('someone needs all players');
  });
});

server.listen(port, ()=>{
  console.log('listening on ', port);
});
