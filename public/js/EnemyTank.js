TanksGame.EnemyTank = function (x,y,id,color) {
  this.id = id;
  enemyTank = game.add.sprite(x, y, color+'Tank');
  enemyTank.anchor.setTo(0.5, 0.5);
  enemyTank.id = id;

  enemyTurret = game.add.sprite(x, y, color+'Turret', color+'Tank');
  enemyTurret.anchor.setTo(0.5, 0.6);
  enemyTurret.id = id;


  game.physics.enable(enemyTank, Phaser.Physics.ARCADE);


}

TanksGame.EnemyTank.prototype.update =  ()=> {

}
