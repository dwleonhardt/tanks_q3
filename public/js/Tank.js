var killedBy = 'The Guardians'
TanksGame.Tank = function (x,y,id,color,name) {

  this.id = id;
  tank = game.add.sprite(x, y, color+'Tank');
  game.physics.enable(tank, Phaser.Physics.ARCADE);
  label = game.add.text(x-12,y-40,name, {font: 'bold 19px VT323', fill: 'black'})
  label.id = id;
  tank.id = id;
  tank.name = name;
  tank.maxHealth = 10
  tank.health = 10;
  tank.anchor.setTo(0.5, 0.5);

  var explosions;

  turret = game.add.sprite(x, y, color+'Turret', color+'Tank');
  turret.anchor.setTo(0.5, 0.6);
  turret.id = id;


  bullets = game.add.group();
  bullets.enableBody = true;
  bullets.createMultiple(50, 'bullet');
  bullets.setAll('checkWorldBounds', true);
  bullets.setAll('outOfBoundsKill', true);

  enemyBullets = game.add.group();
  enemyBullets.enableBody = true;
  enemyBullets.createMultiple(500, 'evilBullet');
  enemyBullets.setAll('checkWorldBounds', true);
  enemyBullets.setAll('outOfBoundsKill', true);

  game.add.sprite(507, 648, 'healthBarBorder');
  healthbar = game.add.sprite(520,660,'healthBar');
  healthbar.cropEnabled = true;


  healthbar.cropInit = function(){
    healthbar.width = (tank.health / tank.maxHealth) * healthbar.width;
    new Phaser.Rectangle(520,660, healthbar.width, healthbar.height);
  }


  fireRate = 100;
  nextFire = 0;
}
TanksGame.Tank.prototype.hitCounter = function (shooterId, bullet) {
  console.log(tank.health);
  tank.health --;
  healthbar.cropInit();
  bullet.kill();
}

TanksGame.Tank.prototype.checkHit = function(enemyBullets){
  var liveEnemyBullets = enemyBullets.filter((bullet)=>bullet.alive).list;

  liveEnemyBullets.forEach((bullet)=>{
    game.world.hash.forEach((otherTank)=>{
      let left = otherTank.position.x - 25;
      let right = otherTank.position.x + 25;
      let up = otherTank.position.y - 25;
      let down = otherTank.position.y + 25;
      if((bullet.x>left&&bullet.x<right)&&(bullet.y>up&&bullet.y<down)&&(otherTank.id === tank.id)){
        killedBy = bullet.name;
        TanksGame.Tank.prototype.hitCounter(bullet.id, bullet);
      }
    });
  });
}
TanksGame.Tank.prototype.checkYoStream = function(bullets){
  var liveBullets = bullets.filter((bullet)=>bullet.alive).list;

  liveBullets.forEach(bullet=>{
    game.world.children.forEach(otherTank=>{
        let left = otherTank.position.x - 25;
        let right = otherTank.position.x + 25;
        let up = otherTank.position.y - 25;
        let down = otherTank.position.y + 25;
        if((bullet.x>left&&bullet.x<right)&&(bullet.y>up&&bullet.y<down)&&(otherTank.id != tank.id)){
          bullet.kill();
        }
      // }
    })
  })
}
TanksGame.Tank.prototype.update =  function() {
  label.x = tank.x-12;
  label.y = tank.y-45;
  TanksGame.Tank.prototype.checkHit(enemyBullets);
  TanksGame.Tank.prototype.checkYoStream(bullets)


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
        bulletY: turret.y,
        bulletId: tank.id,
        bulletName: tank.name
      });

    }
    }
  }


  if (game.input.keyboard.isDown(Phaser.Keyboard.A)||game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
    tank.body.angularVelocity = -200;
    tank.body.label_name = 200;
  }
  else if (game.input.keyboard.isDown(Phaser.Keyboard.D)||game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
    tank.body.angularVelocity = 200;
  }

  if (game.input.keyboard.isDown(Phaser.Keyboard.W)||game.input.keyboard.isDown(Phaser.Keyboard.UP)){
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
      Client.socket.emit('deathStream', {
        death: tank.id
      })
      tank.destroy();
      turret.destroy();
      TanksGame.Play.prototype.ready = false;
      selections.color = '';
      selections.name = '';
      game.stage.backgroundColor = '#553EB4';
      game.state.start('GameOver');
    }
// }
