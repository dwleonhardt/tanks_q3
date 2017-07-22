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
    this.add.sprite(0,0,'bg');
    tank = this.add.sprite(300, 300, 'blueTank');
    tank.anchor.x = 0.5;
    tank.anchor.y = 0.5;
    tank.animations.add('up',[0,1,2], 3, true);
    tank.animations.add('down',[6,7,8], 3, true);
    tank.animations.add('right',[9,10,11], 3, true);
    tank.animations.play('up', 3, false);

    var leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    var downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    var rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    var upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);

    leftKey.onDown.add(function(move){
      tank.animations.add('left',[3,4,5], 9);
      tank.animations.play('left', 9, true);
    }, this)

    downKey.onDown.add(function(move){
      tank.animations.add('down',[6,7,8], 9);
      tank.animations.play('down', 9, true);
    }, this)

    rightKey.onDown.add(function(move){
      tank.animations.add('right',[9,10,11], 9);
      tank.animations.play('right', 9, true);
    }, this)

    upKey.onDown.add(function(move){
      tank.animations.add('up',[0,1,2], 9);
      tank.animations.play('up', 9, true);
    }, this)


var wasLeftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
var wasDownKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
var wasRightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
var wasUpKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);

wasLeftKey.onDown.add(function(move){
  tank.animations.add('left',[3,4,5], 9);
  tank.animations.play('left', 9, true);
}, this)

wasDownKey.onDown.add(function(move){
  tank.animations.add('down',[6,7,8], 9);
  tank.animations.play('down', 9, true);
}, this)

wasRightKey.onDown.add(function(move){
  tank.animations.add('right',[9,10,11], 9);
  tank.animations.play('right', 9, true);
}, this)

wasUpKey.onDown.add(function(move){
  tank.animations.add('up',[0,1,2], 9);
  tank.animations.play('up', 9, true);
}, this)

  },
  update: function(){
    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT) && tank.x > 26)
    {
        tank.x -= 3;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)&& tank.x < 1274)
    {
        tank.x += 3;
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.UP)&& tank.y > 26)
    {
        tank.y -= 3;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN)&& tank.y < 674)
    {
        tank.y += 3;
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.A) && tank.x > 26)
    {
        tank.x -= 3;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.D)&& tank.x < 1274)
    {
        tank.x += 3;
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.W)&& tank.y > 26)
    {
        tank.y -= 3;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.S)&& tank.y < 674)
    {
        tank.y += 3;
    }
  }
}
