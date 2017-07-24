console.log(game);
var Client = {};
Client.socket = io.connect();

Client.socket.on('addTank', function({x,y,id}){
  console.log('addTank()');
  TanksGame.Play.prototype.addTank(x,y,id);
})
Client.addPlayer = function(){
  Client.socket.emit('addPlayer');
}
Client.renderPlayers = function(){
  Client.socket.emit('allPlayers')
}

TanksGame.Play = function(game){
  this.score = 0;
  this.titleText = null;
  this.ready = false;
  this.direction = 'up';

}


TanksGame.Play.prototype = {
  addTank: function(x, y, id){
      let newTank = game.add.sprite(x,y,'blueTank');
      newTank.anchor.x = 0.5;
      newTank.anchor.y = 0.5;
      TanksGame.players[id]= newTank;
    },
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
