
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
    this.load.spritesheet('bellaTank', '/assets/bella_tank.png', 50,50,1);
    this.load.spritesheet('purpleTank', '/assets/purple_tank.png', 50,50,12);
    this.load.spritesheet('redTank', '/assets/red_tank.png', 50,50,12);
    this.load.spritesheet('silverTank', '/assets/silver_tank.png', 50,50,12);
    this.load.spritesheet('greenTank', '/assets/green_tank.png', 50,50,12);
    this.load.spritesheet('bullet', '/assets/bullet.png', 50, 50, 1);
    this.load.spritesheet('blueTurret', '/assets/blue_tank_top.png', 50, 50, 1);
    this.load.spritesheet('redTurret', '/assets/red_tank_top.png', 50, 50, 1);
    this.load.spritesheet('bellaTurret', '/assets/bella_tank_top.png', 50, 50, 1);
    this.load.spritesheet('silverTurret', '/assets/silver_tank_top.png', 50, 50, 1);
    this.load.spritesheet('greenTurret', '/assets/green_tank_top.png', 50, 50, 1);
    this.load.spritesheet('purpleTurret', '/assets/purple_tank_top.png', 50, 50, 1);
  },
  create: function(){
    allTanks = {};
    game.physics.startSystem(Phaser.Physics.ARCADE);
    Client.addPlayer(selections.color);
  },
  destroyTheWeak:function(id){
    console.log(id+' is a coward!!');
    delete TanksGame.Play.prototype.allTanks[id];
    game.world.children = game.world.children.filter((sprite)=>{return sprite.id != id});
  },
  addFoe: function(x,y,id,color){
    enemy = new TanksGame.EnemyTank(x,y,id,color);
    TanksGame.Play.prototype.allTanks[id] = enemy;
  },
  addMe: (x,y,id,color)=>{
    let me = new TanksGame.Tank(x,y,id,color);
    TanksGame.Play.prototype.allTanks[id]= me;
    TanksGame.Play.prototype.ready = true;
  },
  update: function(){
    if(!TanksGame.Play.prototype.ready){return;}
    for (let tank in TanksGame.Play.prototype.allTanks){
      TanksGame.Play.prototype.allTanks[tank].update();
    }
  }

}
