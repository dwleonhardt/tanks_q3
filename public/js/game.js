// console.log('game.js');
// window.onload = function(){
//   var game = new Phaser.Game(1300, 700, Phaser.AUTO, 'gameContainer');
  game.state.add('Boot', TanksGame.Boot);
  game.state.add('Play', TanksGame.Play);
  game.state.start('Boot');
// };
