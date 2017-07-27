  const splode = new Audio('/assets/splosion.wav');
  game.state.add('Boot', TanksGame.Boot);
  game.state.add('Splash', TanksGame.Splash)
  game.state.add('Menu', TanksGame.Menu);
  game.state.add('Play', TanksGame.Play);
  game.state.add('GameOver', TanksGame.GameOver);
  game.state.start('Boot');
