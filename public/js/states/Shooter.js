TanksGame.Shooter = function (game, bullet) {
	this.game = game;
  this.bullet = bullet;
}

TanksGame.Shooter.prototype = {

  // fire: function(bullet){
  //
  //   if (game.time.now > nextFire && bullet.countDead() > 0)
  //   {
  //       nextFire = game.time.now + fireRate;
  //
  //       var bull = bullet.getFirstDead();
  //
  //       bull.reset(sprite.x - 8, sprite.y - 8);
  //
  //       game.physics.arcade.moveToPointer(bull, 300);
  //   }
  //
  // }
}

TanksGame.Shooter.prototype.constructor = TanksGame.Shooter;
