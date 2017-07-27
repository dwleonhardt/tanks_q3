var TanksGame = {};
console.log('cats');

TanksGame.Boot = function(game){

};

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
    this.stage.backgroundColor = '#553EB4';
    this.state.start('Splash');
  }
};
