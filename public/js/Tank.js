TanksGame.Tank = function (game, tank) {
  this.game = game;
  this.tank = tank;
}

TanksGame.Tank.prototype = {
  move: function (tank) {
    var leftKey = tank.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    leftKey.onDown.add(function(move){
      console.log('left');
      tank.animations.add('left',[3,4,5], 9);
      tank.animations.play('left', 9, true);
    }, this)
    leftKey.onUp.add(function(){
      tank.animations.stop(null, true);
    }, this)


  }
}
