
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
    // this.add.sprite(0,0,'bg');
    tank = this.add.sprite(650, 350, 'blueTank');
    tank.anchor.setTo(0.5, 0.5);

    turret = game.add.sprite(650, 350, 'blueTurret', 'blueTank');
    turret.anchor.setTo(0.5, 0.6);


    tank.animations.add('up',[0,1,2], 3, true);
    tank.animations.add('down',[6,7,8], 3, true);
    tank.animations.add('right',[9,10,11], 3, true);
    tank.animations.play('up', 3, false);

    this.Turret = new TanksGame.Turret(this.game, turret);

    var leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    var downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    var rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    var upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);

    leftKey.onDown.add(function(move){
      tank.animations.add('left',[3,4,5], 9);
      tank.animations.play('left', 9, true);
    }, this)

    leftKey.onUp.add(function(){
      tank.animations.stop(null, true);
    }, this)

    downKey.onDown.add(function(move){
      tank.animations.add('down',[6,7,8], 9);
      tank.animations.play('down', 9, true);
    }, this)

    downKey.onUp.add(function(){
      tank.animations.stop(null, true);
    }, this)

    rightKey.onDown.add(function(move){
      tank.animations.add('right',[9,10,11], 9);
      tank.animations.play('right', 9, true);
    }, this)

    rightKey.onUp.add(function(){
      tank.animations.stop(null, true);
    }, this)

    upKey.onDown.add(function(move){
      tank.animations.add('up',[0,1,2], 9);
      tank.animations.play('up', 9, true);
    }, this)

    upKey.onUp.add(function(){
      tank.animations.stop(null, true);
    }, this)


  var wasLeftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
  var wasDownKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
  var wasRightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
  var wasUpKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);

  wasLeftKey.onDown.add(function(move){
    tank.animations.add('left',[3,4,5], 5);
    tank.animations.play('left', 5, true);
  }, this)

  wasLeftKey.onUp.add(function(){
    tank.animations.stop(null, true);
  }, this)

  wasDownKey.onDown.add(function(move){
    tank.animations.add('down',[6,7,8], 5);
    tank.animations.play('down', 5, true);
  }, this)

  wasDownKey.onUp.add(function(){
    tank.animations.stop(null, true);
  }, this)

  wasRightKey.onDown.add(function(move){
    tank.animations.add('right',[9,10,11], 5);
    tank.animations.play('right', 5, true);
  }, this)

  wasRightKey.onUp.add(function(){
    tank.animations.stop(null, true);
  }, this)

  wasUpKey.onDown.add(function(move){
    tank.animations.add('up',[0,1,2], 5);
    tank.animations.play('up', 5, true);
  }, this)

  wasUpKey.onUp.add(function(){
    tank.animations.stop(null, true);
  }, this)

  var spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  spacebar.onDown.add(function(shoot) {
    var tankX = tank.x;
    var tankY = tank.y;
    console.log(tankX, tankY);

    bullet = this.add.sprite(50,50,'bullet');
    bullet.anchor.y = 0.5;
    bullet.anchor.x = 0.5;
    bullet.x = tankX;
    bullet.y = tankY;
  },this)


  },
  update: function(){

    turret.x = tank.x;
    turret.y = tank.y;

  turret.aim = this.Turret.aim(turret);

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
