// console.log('boot.js');
var TanksGame = {};
TanksGame.Boot = function(game){};

TanksGame.Boot.prototype = {
  preload: function(){
    this.load.image('bg', '/assets/background.png');
  },
  create: function(){
    this.stage.disableVisibilityChange = false;
    this.scale.minWidth = 300;
    this.scale.minHeight = 300;
    this.pageAlignHorizonatlly = true;
    this.pageAlignVertically = true;
    this.stage.forcePortrait = true;
    this.stage.backgroundColor = '#FFB6C1';
    // this.scale.setScreenSize(true);
    this.add.sprite(0,0,'bg');
    // this.state.start('Play');
  }
};
