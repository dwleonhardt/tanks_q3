TanksGame.Turret = function (game, turret) {
	this.game = game;
  this.turret = turret;
}

TanksGame.Turret.prototype = {

	aim: function (turret) {
		turret.rotation = game.physics.arcade.angleToPointer(turret)+ 1.57079633;
	},



}

TanksGame.Turret.prototype.constructor = TanksGame.Turret;
