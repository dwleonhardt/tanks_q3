TanksGame.EnemyTank = function (x,y,id,color,name) {
  this.id = id;
  enemyTank = game.add.sprite(x, y, color+'Tank');
  game.physics.enable(enemyTank, Phaser.Physics.ARCADE);
  enemyLabel = game.add.text(x-12,y-40,name, {font: 'bold 19px VT323', fill: 'black'})
  enemyLabel.id = id;
  enemyLabel.key = name;
  enemyTank.anchor.setTo(0.5, 0.5);
  enemyTank.id = id;

  enemyTurret = game.add.sprite(x, y, color+'Turret', color+'Tank');
  enemyTurret.anchor.setTo(0.5, 0.6);
  enemyTurret.id = id;


  game.physics.enable(enemyTank, Phaser.Physics.ARCADE);


}

TanksGame.EnemyTank.prototype.update =  ()=> {
  enemyLabel.x = enemyTank.x-12;
  enemyLabel.y = enemyTank.y-45;
}
