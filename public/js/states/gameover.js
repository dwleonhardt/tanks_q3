
TanksGame.GameOver = function(game){

};
this.poop;
this.Turret;

TanksGame.GameOver.prototype = {
  preload: function(){
    this.load.spritesheet('menuButton', '/assets/menu_button.png', 325, 97);
  },
  create: function(){
    this.stage.backgroundColor = '#222222';
    let theSadNews = game.add.text(game.world.centerX,250,'Game Over.', {font: 'bold 200px VT323', fill: 'white'});
    theSadNews.anchor = {x:.5,y:.5}
    let yerKiller = game.add.text(game.world.centerX,350,`You were killed by ${killedBy}`, {font: 'bold 30px VT323', fill: 'white'});
    yerKiller.anchor = {x:.5,y:.5}
    const startButton = game.add.button(490,560,'menuButton',()=>{game.state.start('Menu');},this, 1,3,2)
  },
  update: function(){
  }
}
