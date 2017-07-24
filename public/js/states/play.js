console.log(game);
var Client = {};
Client.socket = io.connect();

Client.socket.on('addTank', function({x,y,id}){
  console.log('addTank()');
  TanksGame.Play.prototype.addTank(x,y,id);
})
Client.addPlayer = function(){
  Client.socket.emit('addPlayer');
}
Client.renderPlayers = function(){
  Client.socket.emit('allPlayers')
}

TanksGame.Play = function(game){
  this.score = 0;
  this.titleText = null;
  this.ready = false;
  this.direction = 'up';

}


TanksGame.Play.prototype = {
  addTank: function(x, y, id){
      let newTank = game.add.sprite(x,y,'blueTank');
      newTank.anchor.x = 0.5;
      newTank.anchor.y = 0.5;
      TanksGame.players[id]= newTank;
    },
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

    game.physics.enable(tank, Phaser.Physics.ARCADE);


    tank.animations.add('up',[0,1,2], 3, true);
    tank.animations.add('down',[6,7,8], 3, true);
    tank.animations.add('right',[9,10,11], 3, true);
    tank.animations.play('up', 3, false);

    // this.Tank = new TanksGame.Tank(this.game,tank);

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

  }
}
