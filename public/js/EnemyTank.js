TanksGame.EnemyTank = function (x,y,id) {
  this.id = id;
  enemyTank = game.add.sprite(x, y, 'redTank');
  enemyTank.anchor.setTo(0.5, 0.5);

  enemyTurret = game.add.sprite(x, y, 'redTurret', 'redTank');
  enemyTurret.anchor.setTo(0.5, 0.6);


  // bullets = game.add.group();
  // bullets.enableBody = true;
  // bullets.createMultiple(50, 'bullet');
  // bullets.setAll('checkWorldBounds', true);
  // bullets.setAll('outOfBoundsKill', true);

  game.physics.enable(enemyTank, Phaser.Physics.ARCADE);

  // fireRate = 100;
  // nextFire = 0;
}

// TanksGame.EnemyTank.prototype.update =  function() {
//   turret.x = tank.x;
//   turret.y = tank.y;
//   turret.rotation = game.physics.arcade.angleToPointer(turret)+ 1.57079633;
//
//   tank.body.velocity.x = 0;
//   tank.body.velocity.y = 0;
//   tank.body.angularVelocity = 0;
//   tank.angle;
//
//   if (game.input.activePointer.isDown) {
//     if (game.time.now > nextFire && bullets.countDead() > 20){
//       game.world.bringToTop(turret);
//
//       nextFire = game.time.now + fireRate;
//
//       var bullet = bullets.getFirstDead();
//
//       bullet.reset(turret.x, turret.y);
//
//
//       game.physics.arcade.moveToPointer(bullet, 300);
//     }
//   }
//
//
//   if (game.input.keyboard.isDown(Phaser.Keyboard.A)){
//     tank.body.angularVelocity = -200;
//   }
//   else if (game.input.keyboard.isDown(Phaser.Keyboard.D)){
//     tank.body.angularVelocity = 200;
//   }
//
//   if (game.input.keyboard.isDown(Phaser.Keyboard.W)){
//     game.physics.arcade.velocityFromAngle(tank.angle-90, 300, tank.body.velocity);
//     tank.animations.add('up',[0,1,2], 5);
//     tank.animations.play('up', 5, true);
//   }
//   if (tank.x <=25){
//      tank.x = 26;
//     }
//
//     if (tank.x >=1273){
//      tank.x = 1272;
//     }
//
//     if (tank.y <=25){
//      tank.y = 26;
//     }
//
//     if (tank.y >=673){
//      tank.y = 672;
//     }
// }