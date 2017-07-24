Tank = function (index, game, player) {

  this.cursor = {
    left:false,
    right:false,
    up:false,
    fire:false
  }

  this.input = {
    left:false,
    right:false,
    up:false,
    fire:false
  }

  var x = 650;
  var y = 350;

  this.id = index;
  this.game = game;
  this.player = player;
  this.tank = game.add.sprite(x, y, 'blueTank');
  // console.log(this.tank);
  this.tank.anchor.set(0.5);
  game.physics.enable(this.tank, Phaser.Physics.ARCADE);
  this.tank.body.immovable = false;
  this.tank.body.collideWorldBounds = true;
  this.tank.body.bounce.setTo(0, 0);

  this.tank.angle = 0;

  game.physics.arcade.velocityFromRotation(this.tank.rotation, 0, this.tank.body.velocity);

  this.tank.animations.add('up',[0,1,2], 3, true);
  this.tank.animations.add('down',[6,7,8], 3, true);
  this.tank.animations.add('right',[9,10,11], 3, true);
  this.tank.animations.play('up', 3, false);

  var leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  var downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
  var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);

  leftKey.onDown.add(function(move){
    this.tank.animations.add('left',[3,4,5], 9);
    this.tank.animations.play('left', 9, true);
  }, this)

  leftKey.onUp.add(function(){
    this.tank.animations.stop(null, true);
  }, this)

  downKey.onDown.add(function(move){
    this.tank.animations.add('down',[6,7,8], 9);
    this.tank.animations.play('down', 9, true);
  }, this)

  downKey.onUp.add(function(){
    this.tank.animations.stop(null, true);
  }, this)

  rightKey.onDown.add(function(move){
    this.tank.animations.add('right',[9,10,11], 9);
    this.tank.animations.play('right', 9, true);
  }, this)

  rightKey.onUp.add(function(){
    this.tank.animations.stop(null, true);
  }, this)

  upKey.onDown.add(function(move){
    this.tank.animations.add('up',[0,1,2], 9);
    this.tank.animations.play('up', 9, true);
  }, this)

  upKey.onUp.add(function(){
    this.tank.animations.stop(null, true);
  }, this)

  var wasLeftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
  var wasDownKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
  var wasRightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
  var wasUpKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);

  wasLeftKey.onDown.add(function(move){
    this.tank.animations.add('left',[3,4,5], 5);
    this.tank.animations.play('left', 5, true);
  }, this)

  wasLeftKey.onUp.add(function(){
    this.tank.animations.stop(null, true);
  }, this)

  wasDownKey.onDown.add(function(move){
    this.tank.animations.add('down',[6,7,8], 5);
    this.tank.animations.play('down', 5, true);
  }, this)

  wasDownKey.onUp.add(function(){
    this.tank.animations.stop(null, true);
  }, this)

  wasRightKey.onDown.add(function(move){
    this.tank.animations.add('right',[9,10,11], 5);
    this.tank.animations.play('right', 5, true);
  }, this)

  wasRightKey.onUp.add(function(){
    this.tank.animations.stop(null, true);
  }, this)

  wasUpKey.onDown.add(function(move){
    this.tank.animations.add('up',[0,1,2], 5);
    this.tank.animations.play('up', 5, true);
  }, this)

  wasUpKey.onUp.add(function(){
    this.tank.animations.stop(null, true);
  }, this)

Tank.prototype.update = function () {
console.log("working");
  // var inputWasChanged = {
    // this.cursor.left != this.input.left ||
    // this.cursor.right != this.input.right ||
    // this.cursor.up != this.input.up ||
    // this.cursor.fire != this.input.fire
  // };

//   if (inputWasChanged) {
//     // if (this.tank.id == 1) {
//     this.input.x = this.tank.x;
//     this.input.y = this.tank.y;
//   // }
// }

  if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
  {
    console.log('fired');
      this.tank.x -= 3;
  }
  else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)&& this.tank.x < 1274)
  {
      this.tank.x += 3;
  }

  if (game.input.keyboard.isDown(Phaser.Keyboard.UP)&& this.tank.y > 26)
  {
      this.tank.y -= 3;
  }
  else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)&& this.tank.y < 674)
  {
      this.tank.y += 3;
  }

  if (game.input.keyboard.isDown(Phaser.Keyboard.A) && this.tank.x > 26)
  {
      this.tank.x -= 3;
  }
  else if (game.input.keyboard.isDown(Phaser.Keyboard.D)&& this.tank.x < 1274)
  {
      this.tank.x += 3;
  }

  if (game.input.keyboard.isDown(Phaser.Keyboard.W)&& this.tank.y > 26)
  {
      this.tank.y -= 3;
  }
  else if (game.input.keyboard.isDown(Phaser.Keyboard.S)&& this.tank.y < 674)
  {
      this.tank.y += 3;
  }

};
};
