TanksGame.EnemyBullet = function () {
  bullets = game.add.group();
  bullets.enableBody = true;
  bullets.createMultiple(50, 'bullet');
  bullets.setAll('checkWorldBounds', true);
  bullets.setAll('outOfBoundsKill', true);

  fireRate = 100;
  nextFire = 0;
}

TanksGame.EnemyBullet.prototype.update =  (mouseX, mouseY, bulletX, bulletY)=> {

  nextFire = game.time.now + fireRate;

  var bullet = bullets.getFirstDead();

  bullet.reset(bulletX, bulletY);

  game.physics.arcade.moveToXY(bullet, mouseX, mouseY, 300);
}
