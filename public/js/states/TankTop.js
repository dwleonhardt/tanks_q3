TanksGame.Turret = function (game, turret) {
	this.game = game;
	this.tank = tank;
  this.turret = turret;



}

TanksGame.Turret.prototype = {

	aim: function (turret) {
		turret.rotation = game.physics.arcade.angleToPointer(turret);
	},



}

TanksGame.Turret.prototype.constructor = TanksGame.Turret;
