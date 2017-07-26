
var TanksGame = {};
TanksGame.Boot = function(game){

};

this.Turret;

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
    this.stage.backgroundColor = '#7BAFAF';
    this.state.start('Menu');
  }
};
