TanksGame.EnemyBullet = function (x,y,id) {
  // bullets = game.add.group();
  // bullets.enableBody = true;
  // bullets.createMultiple(50000000000000000000, 'bullet');
  // bullets.setAll('checkWorldBounds', true);
  // bullets.setAll('outOfBoundsKill', true);


}

TanksGame.EnemyBullet.prototype.update =  (mouseX, mouseY, bulletX, bulletY, bulletId, bulletName)=> {
  var enemyBullet = enemyBullets.getFirstDead();
  enemyBullet.id = bulletId;
  enemyBullet.name = bulletName;
  enemyBullet.reset(bulletX, bulletY);
  game.physics.arcade.moveToXY(enemyBullet, mouseX, mouseY, 300);
}

module.exports = {
  TanksGame
};
