TanksGame.Tank = function (game, tank) {
  this.game = game;
  this.tank = tank;
}

TanksGame.Tank.prototype = {
  rotateLeft: function(tank){
    
    tank.angle -= 4;

  },
  rotateRight: function(tank){
    tank.angle += 4;
  }
}
