TanksGame.Turret = function (game, turret) {
	this.game = game;
  this.turret = turret;



}

TanksGame.Turret.prototype = {

	aim: function (turret) {
		turret.rotation = game.physics.arcade.angleToPointer(turret)+ 1.57079633;
	},

  fire: function(bullet){


        nextFire = game.time.now;

        var bull = bullet.getFirstDead();

      


  }


}

TanksGame.Turret.prototype.constructor = TanksGame.Turret;
