
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
<<<<<<< HEAD
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

    leftKey.onUp.add(function(){
      d// if(!leftKey.onDown){}
      tank.animations.stop(null, true);
    }, this)
=======
    tank.anchor.setTo(0.5, 0.5);
>>>>>>> 064edde2f46fed539a4d84e0f5f853a29c0053ff

    turret = game.add.sprite(650, 350, 'blueTurret', 'blueTank');
    turret.anchor.setTo(0.5, 0.6);

    game.physics.enable(tank, Phaser.Physics.ARCADE);


    tank.animations.add('up',[0,1,2], 3, true);
    tank.animations.add('down',[6,7,8], 3, true);
    tank.animations.add('right',[9,10,11], 3, true);
    tank.animations.play('up', 3, false);

    this.Tank = new TanksGame.Tank(this.game,tank);

    this.Turret = new TanksGame.Turret(this.game, turret);



  var leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
  var downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
  var rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
  var upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);


  downKey.onDown.add(function(move){
    tank.animations.add('down',[6,7,8], 5);
    tank.animations.play('down', 5, true);
  }, this)

  downKey.onUp.add(function(){
    tank.animations.stop(null, true);
  }, this)


  upKey.onDown.add(function(move){
    tank.animations.add('up',[0,1,2], 5);
    tank.animations.play('up', 5, true);
  }, this)

  upKey.onUp.add(function(){
    tank.animations.stop(null, true);
  }, this)

  var spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  spacebar.onDown.add(function(shoot) {
    var tankX = tank.x;
    var tankY = tank.y;

    bullet = this.add.sprite(50,50,'bullet');
    bullet.anchor.y = 0.5;
    bullet.anchor.x = 0.5;
    bullet.x = tankX;
    bullet.y = tankY;
  },this)


  },
  update: function(){

    tank.body.velocity.x = 0;
    tank.body.velocity.y = 0;
    tank.body.angularVelocity = 0;
    tank.angle;

    if (game.input.keyboard.isDown(Phaser.Keyboard.A))
    {
        tank.body.angularVelocity = -200;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        tank.body.angularVelocity = 200;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.W))
    {
        game.physics.arcade.velocityFromAngle(tank.angle-90, 300, tank.body.velocity);
    }

    turret.x = tank.x;
    turret.y = tank.y;

    turret.aim = this.Turret.aim(turret);
    //
    // if (this.input.keyboard.isDown(Phaser.Keyboard.A) && tank.x > 26)
    // {
    //     this.Tank.rotateLeft(tank);
    // }
    // else if (this.input.keyboard.isDown(Phaser.Keyboard.D)&& tank.x < 1274)
    // {
    //   this.Tank.rotateRight(tank);
    // }
    //
    // if (this.input.keyboard.isDown(Phaser.Keyboard.UP)&& tank.y > 26)
    // {
    //     currentSpeed = 300;
    // }
    // else if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN)&& tank.y < 674)
    // {
    //     currentSpeed = 300;
    //     // console.log(tank);
    // }
    //
    // if (this.input.keyboard.isDown(Phaser.Keyboard.W)&& tank.y > 26)
    // {
    //     tank.y -= 3;
    // }
    // else if (this.input.keyboard.isDown(Phaser.Keyboard.S)&& tank.y < 674)
    // {
    //     tank.y += 3;
    // }
  }
}
