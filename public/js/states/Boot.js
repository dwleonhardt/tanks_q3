// console.log('boot.js');
var TanksGame = {};
TanksGame.Boot = function(game){};

TanksGame.Boot.prototype = {
  preload: function(){
  },
  create: function(){
    this.stage.disableVisibilityChange = false;
    this.scale.minWidth = 300;
    this.scale.minHeight = 300;
    this.pageAlignHorizonatlly = true;
    this.pageAlignVertically = true;
    this.stage.forcePortrait = true;
    this.stage.backgroundColor = '#FFB6C1';
    this.state.start('Play');
  }
};