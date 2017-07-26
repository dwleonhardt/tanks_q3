TanksGame.EnemyBullet = function (x,y,id) {
  // bullets = game.add.group();
  // bullets.enableBody = true;
  // bullets.createMultiple(50000000000000000000, 'bullet');
  // bullets.setAll('checkWorldBounds', true);
  // bullets.setAll('outOfBoundsKill', true);


}

TanksGame.EnemyBullet.prototype.update =  (mouseX, mouseY, bulletX, bulletY)=> {
  var bullet = bullets.getFirstDead();
  bullet.reset(bulletX, bulletY);
  game.physics.arcade.moveToXY(bullet, mouseX, mouseY, 300);
}
