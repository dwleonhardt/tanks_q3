// console.log('boot.js');
var TanksGame = {};
TanksGame.Boot = function(game){
  this.load.spritesheet('blueTank', '../../assets/blue_tank/blue_tank.png',32,32, 3);
};

TanksGame.Boot.prototype = {
  preload: function(){},
  create: function(){
    console.log('create');
    this.stage.disableVisibilityChange = false;
    this.scale.minWidth = 300;
    this.scale.minHeight = 300;
    this.pageAlignHorizonatlly = true;
    this.pageAlignVertically = true;
    this.stage.forcePortrait = true;
    this.stage.backgroundColor = '#FFB6C1';
    this.scale.setScreenSize(true);
    this.state.start('Preloader');
  }
};
