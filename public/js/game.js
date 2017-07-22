// console.log('game.js');
window.onload = function(){
  var game = new Phaser.Game(600, 600, Phaser.AUTO, 'gameContainer');
  game.state.add('Boot', TanksGame.Boot);
  game.state.add('Play', TanksGame.Play);
  game.state.start('Boot');

};
