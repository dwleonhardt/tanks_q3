// console.log('play.js');
TanksGame.Play = function(game){
  this.score = 0;
  this.titleText = null;
  this.ready = false;
  let randx = Math.floor(Math.random()*600);
  let randy = Math.floor(Math.random()*600);
  this.tank ={
    position:{
      x:randx,
      y:randy
    }
  }

  // this.tank.position.x = randx;
  // this.tank.position.y = randy;
}
TanksGame.Play.prototype = {
  preload: function(){
    this.load.image('bg', '/assets/backgroundg.png');
    this.load.image('bullet', '/assets/bullet.png');
    this.load.spritesheet('blueTank', '/assets/blue_tank.png', 32,32,3);
  },
  create: function(){
    this.add.sprite(0,0,'bg');
    let tank = this.add.sprite(this.tank.position.x, this.tank.position.y, 'blueTank');
    tank.anchor.x = 0.5;
    tank.anchor.y = 0.5;
    var fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    fireButton.onDown.add(this.fire, this)
  },
  update: function(){},
  fire: function(thing){
    console.log(thing);
    console.log('fire');
    let bullet = this.add.sprite(this.tank.position.x, this.tank.position.y-25, 'bullet');
    bullet.anchor.x = 0.5;
    bullet.anchor.y = 0.5;
  }
}
