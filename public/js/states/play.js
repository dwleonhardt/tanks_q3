// console.log('play.js');
var Client = {};
Client.socket = io.connect('http://localhost:8000');
// Client.socket = new io.Socket('localhost', {port: 8000 }).connect();
Client.socket.on('testReceived', function(data){
  console.log('the test was received!');
})
Client.addTank = function(){
  console.log(Client.socket);
  console.log('its getting called...');
  Client.socket.emit('test');
}




TanksGame.Play = function(game){};

TanksGame.Play.prototype = {
  preload: function(){
    this.load.image('bg', '/assets/backgroundg.png');
    this.load.image('bullet', '/assets/bullet.png');
    this.load.spritesheet('blueTank', '/assets/blue_tank.png', 32,32,3);
  },
  create: function(){
    this.add.sprite(0,0,'bg');
    Client.addTank();
  },
  update: function(){},
  cats: function(){
    console.log('cats');
  }

}
