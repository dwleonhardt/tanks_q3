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
  socket.on('addPlayer', function(){
    let x;
    let y;
    if (tanks.length === 0){
      x =325;
      y =175;
    }else if(tanks.length ===1){
      x = 975;
      y = 525;
    }
    else if(tanks.length ===2){
      x = 325;
      y = 525;
    } else if(tanks.length===3){
      x = 975;
      y = 175;
    }
    let newPlayer = {
      x:x,
      y:y,
      id: socket.id
    }
    socket.emit('allPrev', tanks)
    tanks.push(newPlayer);
    // console.log(tanks);
    socket.emit('addTank', newPlayer);
    socket.broadcast.emit('newBaddy', newPlayer);
  });
  socket.on('disconnect', function(){
    socket.broadcast.emit('quitter', socket.id);
    let coward = tanks.find(tank=>tank.id=socket.id)
    let cowardIndex = tanks.indexOf(coward);
    tanks.splice(cowardIndex, 1);
    // console.log(tanks);
  })
  socket.on('allPlayers', function(){
    tanks.filter
  });
  socket.on('moveStream', function(info){
    if(tanks.length > 0){
      // let moving = tanks.find((tank)=>{ return tank.id===info.id;});
      // console.log(moving);
      // moving.x = info.x;
      // moving.y = info.y;
      // let movingIndex = tanks.indexOf(moving);
      socket.broadcast.emit('moveStream', info);
    }
  });
  socket.on('shootStream', function(info){
    socket.broadcast.emit('shootStream', info);
  });

  socket.on('collision', function (info) {
    socket.broadcast.emit('collision', info);
    // console.log(info);
    // console.log(info, 'server.js info');
    // console.log(info.tankX);
    // tankXX = info.tankX;
  })
});

server.listen(port, ()=>{
  console.log('listening on ', port);
});
