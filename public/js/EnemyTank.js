TanksGame.EnemyTank = function (x,y,id) {
  this.id = id;
  enemyTank = game.add.sprite(x, y, 'redTank');
  enemyTank.anchor.setTo(0.5, 0.5);
  enemyTank.id = id;

  enemyTurret = game.add.sprite(x, y, 'redTurret', 'redTank');
  enemyTurret.anchor.setTo(0.5, 0.6);
  enemyTurret.id = id;


  game.physics.enable(enemyTank, Phaser.Physics.ARCADE);

    enemyTank.body.bounce.setTo(0,0);
    enemyTank.body.collideWorldBounds = true;
    this.checkCollision = { up: true, down: true, left: true, right: true };

TanksGame.EnemyTank.prototype.update =  ()=> {

  game.physics.arcade.collide(enemyTank,tank);
  }
}
