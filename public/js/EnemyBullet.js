TanksGame.EnemyBullet = function (x,y,id) {

}

TanksGame.EnemyBullet.prototype.update =  (mouseX, mouseY, bulletX, bulletY, bulletId, bulletName)=> {
  var enemyBullet = enemyBullets.getFirstDead();
  enemyBullet.id = bulletId;
  enemyBullet.name = bulletName;
  enemyBullet.reset(bulletX, bulletY);
  game.physics.arcade.moveToXY(enemyBullet, mouseX, mouseY, 300);
}
