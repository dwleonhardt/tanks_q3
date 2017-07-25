var Client = {};
Client.socket = io.connect();

Client.socket.on('addTank', function({x,y,id}){
  TanksGame.Play.prototype.addMe(x,y,id);
})
Client.socket.on('newBaddy', function(data){
  console.log(data);
  console.log('a new baddy has come; handle it');
})
Client.addPlayer = function(){
  Client.socket.emit('addPlayer');
}


TanksGame.Play = function(game){
  this.score = 0;
  this.titleText = null;
  this.ready = false;
  this.direction = 'up';
}


TanksGame.Play.prototype = {
  allTanks: {},
  ready: false,
  preload: function(){
    this.load.spritesheet('blueTank', '/assets/blue_tank.png', 50,50,12);
    this.load.spritesheet('redTank', '/assets/red_tank.png', 50,50,12);
    this.load.spritesheet('bullet', '/assets/bullet.png', 50, 50, 1);
    this.load.spritesheet('blueTurret', '/assets/blue_tank_top.png', 50, 50, 1);
    this.load.spritesheet('redTurret', '/assets/red_tank_top.png', 50, 50, 1);
  },
  create: function(){
    allTanks = {};
    game.physics.startSystem(Phaser.Physics.ARCADE);
    Client.addPlayer();
  },
  addMe: (x,y,id)=>{
    enemy = new TanksGame.EnemyTank(x,y,id);
    TanksGame.Play.prototype.allTanks[id]=new TanksGame.Tank(x,y,id);
    TanksGame.Play.prototype.ready = true;
  },
  update: function(){
    if(!TanksGame.Play.prototype.ready){return;}
    for (let tank in TanksGame.Play.prototype.allTanks){
      TanksGame.Play.prototype.allTanks[tank].update();
    }
  }
}
