TanksGame.Tank = function (x,y,id,color) {
  this.id = id;
  tank = game.add.sprite(x, y, color+'Tank');
  tank.id = id;
  tank.health = 1000;
  tank.anchor.setTo(0.5, 0.5);

  turret = game.add.sprite(x, y, color+'Turret', color+'Tank');
  turret.anchor.setTo(0.5, 0.6);
  turret.id = id;


  bullets = game.add.group();
  bullets.enableBody = true;
  bullets.createMultiple(50, 'bullet');
  bullets.setAll('checkWorldBounds', true);
  bullets.setAll('outOfBoundsKill', true);

  game.physics.enable(tank, Phaser.Physics.ARCADE);

  fireRate = 100;
  nextFire = 0;
}

TanksGame.Tank.prototype.update =  function() {
  let fired = bullets.hash.filter((bullet)=>{return bullet.alive});
  fired.forEach((bullet)=>{
    game.world.hash.forEach((otherTank)=>{
      let left = otherTank.position.x - 25;
      let right = otherTank.position.x + 25;
      let up = otherTank.position.y - 25;
      let down = otherTank.position.y + 25;
      if((bullet.x>left&&bullet.x<right)&&(bullet.y>up&&bullet.y<down)&&otherTank.id!=tank.id){
        console.log(`${otherTank.id} was hit`);
      }
    })
  });
  Client.socket.emit('moveStream', {
    x: tank.x,
    y: tank.y,
    id: tank.id,
    tankAngle: tank.angle,
    turretAngle: turret.angle
  });
  turret.x = tank.x;
  turret.y = tank.y;
  turret.rotation = game.physics.arcade.angleToPointer(turret)+ 1.57079633;

  tank.body.velocity.x = 0;
  tank.body.velocity.y = 0;
  tank.body.angularVelocity = 0;
  tank.angle;

  if (game.input.activePointer.isDown) {
    if (game.time.now > nextFire && bullets.countDead() > 20){
      game.world.bringToTop(turret);

      nextFire = game.time.now + fireRate;

      var bullet = bullets.getFirstDead();

      bullet.reset(turret.x, turret.y);

      game.physics.arcade.moveToPointer(bullet, 300);

      Client.socket.emit('shootStream', {
        mouseX: game.input.mousePointer.x,
        mouseY: game.input.mousePointer.y,
        bulletX: bullet.x,
        bulletY: turret.y
      });

    }
  }


  if (game.input.keyboard.isDown(Phaser.Keyboard.A)){
    tank.body.angularVelocity = -200;
  }
  else if (game.input.keyboard.isDown(Phaser.Keyboard.D)){
    tank.body.angularVelocity = 200;
  }

  if (game.input.keyboard.isDown(Phaser.Keyboard.W)){
    game.physics.arcade.velocityFromAngle(tank.angle-90, 300, tank.body.velocity);
    tank.animations.add('up',[0,1,2], 5);
    tank.animations.play('up', 5, true);
  }
  if (tank.x <=25){
     tank.x = 26;
    }

    if (tank.x >=1273){
     tank.x = 1272;
    }

    if (tank.y <=25){
     tank.y = 26;
    }

    if (tank.y >=673){
     tank.y = 672;
    }
    if(tank.health <= 0){
      console.log('game over');
    }
}
