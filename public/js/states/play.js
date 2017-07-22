// console.log('play.js');
var Client = {};
Client.socket = io.connect();
Client.addTank = function(){
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
  update: function(){}

}
