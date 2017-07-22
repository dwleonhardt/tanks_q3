// console.log('play.js');

// var move = false;
// var pressed = false;
TanksGame.Play = function(game){
  this.score = 0;
  this.titleText = null;
  this.ready = false;
  this.direction = 'up';
}
TanksGame.Play.prototype = {
  preload: function(){
    this.load.image('bg', '/assets/background.png');
    this.load.spritesheet('blueTank', '/assets/blue_tank.png', 50,50,12);
  },
  create: function(){
    // this.world.setBounds(0, 0, 600, 600);
    this.add.sprite(0,0,'bg');
    tank = this.add.sprite(300, 300, 'blueTank');
    tank.anchor.x = 0.5;
    tank.anchor.y = 0.5;
    tank.animations.add('up',[0,1,2], 9, true);
    tank.animations.add('down',[6,7,8], 9, true);
    tank.animations.add('right',[9,10,11], 9, true);
    tank.animations.play('up', 9, false);

    var leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    var downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    var rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    var upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);

    leftKey.onDown.add(function(move){
      tank.animations.add('left',[3,4,5], 5, true);
      tank.animations.play('left', 5, false);
    }, this)

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

    rightKey.onDown.add(function(move){
      tank.animations.add('right',[9,10,11], 5, true);
      tank.animations.play('right', 5, false);
    }, this)

    upKey.onDown.add(function(move){
      tank.animations.add('up',[0,1,2], 5, true);
      tank.animations.play('up', 5, false);

    }, this)


// tank.animations.add('run');
// tank.animations.play('run', 10, true);

var wasLeftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
var wasDownKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
var wasRightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
var wasUpKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);

wasLeftKey.onDown.add(function(move){
  tank.animations.add('left',[3,4,5], 5, true);
  tank.animations.play('left', 5, false);
}, this)

wasDownKey.onDown.add(function(move){
  tank.animations.add('down',[6,7,8], 5, true);
  tank.animations.play('down', 5, false);
}, this)

wasRightKey.onDown.add(function(move){
  tank.animations.add('right',[9,10,11], 5, true);
  tank.animations.play('right', 5, false);
}, this)

wasUpKey.onDown.add(function(move){
  tank.animations.add('up',[0,1,2], 5, true);
  tank.animations.play('up', 5, false);
}, this)

  },
  update: function(){


// let tank = this.add.sprite(300, 300, 'blueTank');

    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        tank.x -= 3;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        tank.x += 3;
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        tank.y -= 3;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        tank.y += 3;
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.A))
    {
        tank.x -= 3;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        tank.x += 3;
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.W))
    {
        tank.y -= 3;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.S))
    {
        tank.y += 3;
    }
  }
}
