// console.log('play.js');
TanksGame.Play = function(game){
  this.score = 0;
  this.titleText = null;
  this.ready = false;
  this.direction = 'up';
}
TanksGame.Play.prototype = {
  preload: function(){
    this.load.image('bg', '/assets/background.png');
    this.load.spritesheet('blueTank', '/assets/blue_tank.png', 50,50, 12)
  },
  create: function(){
    this.add.sprite(0,0,'bg');
    let tank = this.add.sprite(300, 300, 'blueTank');
    tank.anchor.x = 0.5;
    tank.anchor.y = 0.5;
    tank.animations.add('up',[0,1,2], 9, true);
    tank.animations.add('left',[3,4,5], 9, true);
    tank.animations.add('down',[6,7,8], 9, true);
    tank.animations.add('right',[9,10,11], 9, true);
    tank.animations.play(`${this.direction}`, 9, false);

    var leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);

    leftKey.onDown.add(this.direction, this)


  },
  direction: function(move){
    this.direction = 'left';
  },
  update: function(){}
}
