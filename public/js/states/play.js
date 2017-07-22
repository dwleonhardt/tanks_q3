// console.log('play.js');
var leftKey;
var rightKey;
var downKey;
var upKey;
var move = false;
var pressed = false;
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
    tank.animations.add('down',[6,7,8], 9, true);
    tank.animations.add('right',[9,10,11], 9, true);
    tank.animations.play('up', 9, false);

    leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);

    leftKey.onDown.add(function(move){
      tank.animations.add('left',[3,4,5], 9, true);
      tank.animations.play('left', 9, false);
    }, this)

    TanksGame.leftKey.onDown.add(()=> pressed = true , this);
    TanksGame.leftKey.onUp.add(()=> pressed = false , this);

    downKey.onDown.add(function(move){
      tank.animations.add('down',[6,7,8], 9, true);
      tank.animations.play('down', 9, move);
    }, this)

    rightKey.onDown.add(function(move){
      tank.animations.add('right',[9,10,11], 9, true);
      tank.animations.play('right', 9, move);
    }, this)

    upKey.onDown.add(function(move){
      tank.animations.add('up',[0,1,2], 9, true);
      tank.animations.play('up', 9, move);
    }, this)


  },
  update: function(){
    if(pressed = true){
      console.log('on');
      // move = true;
    }
    else{
      console.log('off');
    }
  }

}
