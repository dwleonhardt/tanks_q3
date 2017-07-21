// console.log('play.js');
TanksGame.Play = function(game){
  this.score = 0;
  this.titleText = null;
  this.ready = false;
}
TanksGame.Play.prototype = {
  preload: function(){
    this.load.image('bg', '/assets/background.png');
    this.load.spritesheet('blueTank', '/assets/blue_tank/blue_tank.png', 32,32,3)
  },
  create: function(){
    this.add.sprite(0,0,'bg');
    let tank = this.add.sprite(300, 300, 'blueTank');
    tank.anchor.x = 0.5;
    tank.anchor.y = 0.5;
  },
  update: function(){}
}
