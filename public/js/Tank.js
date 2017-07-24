TanksGame.Tank = function () {
  tank = game.add.sprite(650, 350, 'blueTank');
  tank.anchor.setTo(0.5, 0.5);

  turret = game.add.sprite(650, 350, 'blueTurret', 'blueTank');
  turret.anchor.setTo(0.5, 0.6);

  game.physics.enable(tank, Phaser.Physics.ARCADE);
}

TanksGame.Tank.prototype.update =  function() {
  turret.x = tank.x;
  turret.y = tank.y;
  turret.rotation = game.physics.arcade.angleToPointer(turret)+ 1.57079633;
  
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
    tank.animations.add('up',[0,1,2], 5);
    tank.animations.play('up', 5, true);
  }
  if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
    bullet = game.add.sprite(50,50,'bullet');
    bullet.anchor.y = 0.5;
    bullet.anchor.x = 0.5;
    bullet.x = tank.x;
    bullet.y = tank.y;
  }
}
