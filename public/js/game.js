// console.log('game.js');
window.onload = function(){
  var game = new Phaser.Game(600, 600, Phaser.AUTO, 'gameContainer');
  console.log("onload");
  game.state.add('Boot', TanksGame.Boot);
  game.state.start('Boot');

};
