TanksGame.Turret = function (game, turret) {
	this.game = game;
  this.turret = turret;

}

TanksGame.Turret.prototype = {

	aim: function (turret) {
		turret.rotation = game.physics.arcade.angleToPointer(turret)+ 1.57079633;
	},

  fire: function(turret, bullets) {
    var fireRate = 100;
    var nextFire = 0;
    if (game.time.now > nextFire && bullets.countDead() > 20){
        game.world.bringToTop(turret);
      console.log(bullets.countDead());
        nextFire = game.time.now + fireRate;

        var bullet = bullets.getFirstDead();
        console.log(turret.x);
        bullet.reset(turret.x - 4, turret.y - 5);

        game.physics.arcade.moveToPointer(bullet, 300);
    }
  }
}

TanksGame.Turret.prototype.constructor = TanksGame.Turret;
