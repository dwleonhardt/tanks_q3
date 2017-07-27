TanksGame.Splash = function(game){

};

this.Turret;

TanksGame.Splash.prototype = {
  preload: function(){
    this.load.image('bg', '/assets/menu.png', 1300, 700);
    this.load.spritesheet('blueTank', '/assets/blue_tank.png', 50,50,3);
    this.load.spritesheet('purpleTank', '/assets/purple_tank.png', 50,50,3);
    this.load.spritesheet('redTank', '/assets/red_tank.png', 50,50,13);
    this.load.spritesheet('silverTank', '/assets/silver_tank.png', 50,50,3);
    this.load.spritesheet('greenTank', '/assets/green_tank.png', 50,50,13);
    this.load.spritesheet('blueTurret', '/assets/blue_tank_top.png', 50, 50, 1);
    this.load.spritesheet('redTurret', '/assets/red_tank_top.png', 50, 50, 1);
    this.load.spritesheet('silverTurret', '/assets/silver_tank_top.png', 50, 50, 1);
    this.load.spritesheet('greenTurret', '/assets/green_tank_top.png', 50, 50, 1);
    this.load.spritesheet('purpleTurret', '/assets/purple_tank_top.png', 50, 50, 1);
  },
  create: function(){

    this.stage.backgroundColor = '#000000';
    curtain = this.add.image(0,704, 'bg');
    blueTank = this.add.sprite(0,660,'blueTank');
    blueTurret = this.add.sprite(0,660,'blueTurret');
    silverTank = this.add.sprite(1250, 660, 'silverTank');
    silverTurret = this.add.sprite(1250, 660, 'silverTurret');
    redTank = this.add.sprite(game.world.centerX-25, 660, 'redTank');
    redTurret = this.add.sprite(game.world.centerX-25, 660, 'redTurret');
    purpleTank = this.add.sprite(287, 660, 'purpleTank');
    purpleTurret = this.add.sprite(287, 660, 'purpleTurret');
    greenTank = this.add.sprite(937, 660, 'greenTank');
    greenTurret = this.add.sprite(937, 660, 'greenTurret');
  },
  update: function(){
    console.log(game.world.centerX);
    curtain.y-=4;
    blueTank.y-=4;
    blueTurret.y-=4;
    silverTank.y-=4;
    silverTurret.y-=4;
    redTurret.y-=4;
    redTank.y-=4;
    purpleTank.y-=4;
    purpleTurret.y-=4;
    greenTurret.y-=4;
    greenTank.y-=4;
    if(curtain.y <= 0){
      game.stage.backgroundColor = '#553EB4';
      game.state.start('Menu')
    }
  }
}
