if(TanksGame){
  // console.log('yay');
}
else {
  var TanksGame = {}
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
    this.load.spritesheet('bellaTank', '/assets/bella_tank.png', 50,50,1);
    this.load.spritesheet('purpleTank', '/assets/purple_tank.png', 50,50,12);
    this.load.spritesheet('redTank', '/assets/red_tank.png', 50,50,12);
    this.load.spritesheet('silverTank', '/assets/silver_tank.png', 50,50,12);
    this.load.spritesheet('greenTank', '/assets/green_tank.png', 50,50,12);
    this.load.spritesheet('bullet', '/assets/bullet.png', 50, 50, 1);
    this.load.spritesheet('evilBullet', '/assets/red_bullet.png', 50, 50, 1);
    this.load.spritesheet('blueTurret', '/assets/blue_tank_top.png', 50, 50, 1);
    this.load.spritesheet('redTurret', '/assets/red_tank_top.png', 50, 50, 1);
    this.load.spritesheet('bellaTurret', '/assets/bella_tank_top.png', 50, 50, 1);
    this.load.spritesheet('background', '/assets/background.png', 1300, 700, 1);
    this.load.spritesheet('healthBarBorder', '/assets/health_bartop.png', 275, 50, 1);
    this.load.spritesheet('silverTurret', '/assets/silver_tank_top.png', 50, 50, 1);
    this.load.spritesheet('greenTurret', '/assets/green_tank_top.png', 50, 50, 1);
    this.load.spritesheet('purpleTurret', '/assets/purple_tank_top.png', 50, 50, 1);
    this.load.spritesheet('healthBar', '/assets/health_bar.png', 250, 25, 1);
    this.load.spritesheet('splosion', '/assets/splosion.png', 150, 150, 9);
  },
  create: function(){
    this.add.image(0,0, 'background')
    allTanks = {};
    let hint = game.add.text(game.world.centerX,0,'Destroy enemy tanks to regain health', {font: 'bold 90px VT323', fill: 'red'});
    hint.deleteMe = true;
    setTimeout(()=>{
      game.world.children.forEach((sprite)=>{
        if(sprite.deleteMe){
          sprite.destroy();
        }
      })
    },3000)
    hint.anchor.x = 0.5;
    game.physics.startSystem(Phaser.Physics.ARCADE);
    Client.addPlayer(selections);
  },
  destroyTheWeak:function(id){
    if (game.state.current === 'Play'){
      delete TanksGame.Play.prototype.allTanks[id];
      let saveX;
      let saveY;
      game.world.children = game.world.children.filter((sprite)=>{
        if(sprite.id == id){
          saveX = sprite.x;
          saveY = sprite.y;
        }
        return sprite.id != id
      });
      splosion = game.add.sprite(saveX,saveY,'splosion');
      splosion.anchor ={x:0.5,y:0.5};
      splosion.scale.setTo(1.5,1.5);
      splosion.animations.add('boom',[0,1,2,3,4,5,6,7,8],15,false);
      splosion.animations.play('boom');
      setTimeout(()=>{splosion.destroy();},600);
    }
  },
  addFoe: function(x,y,id,color,name){
    enemy = new TanksGame.EnemyTank(x,y,id,color,name);
    TanksGame.Play.prototype.allTanks[id] = enemy;
  },
  addMe: (x,y,id,color,name)=>{
    let me = new TanksGame.Tank(x,y,id,color,name);
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

module.exports = TanksGame.Play;
