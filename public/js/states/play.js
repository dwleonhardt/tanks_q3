
var Client = {};
Client.socket = io.connect();

Client.socket.on('testReceived', function(data){
  console.log('the test was received!');
})
Client.addTank = function(){
  console.log(Client.socket);
  console.log('its getting called...');
  Client.socket.emit('test');
}

TanksGame.Play = function(game){
  this.score = 0;
  this.titleText = null;
  this.ready = false;
  this.direction = 'up';

}

TanksGame.Play.prototype = {
  preload: function(){
    // this.load.image('bg', '/assets/background.png');
    this.load.spritesheet('blueTank', '/assets/blue_tank.png', 50,50,12);
    this.load.spritesheet('bullet', '/assets/bullet.png', 50, 50, 1);
    this.load.spritesheet('blueTurret', '/assets/blue_tank_top.png', 50, 50, 1);
  },
  create: function(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.Tank = new TanksGame.Tank();
  },
  update: function(){
    this.Tank.update();
  }
}
