
TanksGame.Controls = function(game){

};

TanksGame.Controls.prototype = {
  preload: function(){
    this.load.image('bgcontrols', '/assets/controls_bg.png', 1300, 700);
    this.load.image('wasdad', '/assets/wasdad.png');
    this.load.image('wasdws', '/assets/wasdws.png');
    this.load.image('mouse', '/assets/mouse.png');
    this.load.spritesheet('redTank', '/assets/red_tank.png', 50,50,13);
    this.load.spritesheet('redTurret', '/assets/red_tank_top.png', 50, 50, 1);
    this.load.spritesheet('bullet', '/assets/bullet.png', 50, 50, 1);
    this.load.spritesheet('menuButton', '/assets/menu_button.png', 325, 97);
  },
  create: function(){
    this.add.image(0,0,'bgcontrols');
    leftRight = this.game.add.sprite(207,180,'redTank');
    leftRight.anchor = {x:0.5, y:0.5};
    leftRight.scale.setTo(2,2);
    leftRight.addChild(game.make.sprite(-25,-25, 'redTurret'));
    game.physics.enable(leftRight, Phaser.Physics.ARCADE);




    upDown = this.game.add.sprite(630,180,'redTank');
    upDown.anchor = {x:0.5, y:0.5};
    upDown.scale.setTo(2,2);
    upDown.addChild(game.make.sprite(-25,-25, 'redTurret'));
    game.physics.enable(upDown, Phaser.Physics.ARCADE);



    let bottom = game.add.sprite(1080,180, 'redTank');
    bottom.anchor = {x:0.5,y:0.5};
    bottom.scale.setTo(2,2);
    shooter = this.game.add.sprite(1080, 185, 'redTurret');
    shooter.anchor = {x:0.5,y:0.6};
    shooter.scale.setTo(2,2);

    ball = game.add.group();
    ball.enableBody = true;
    ball.createMultiple(10, 'bullet')
    ball.setAll('checkWorldBounds', true);
    ball.setAll('outOfBoundsKill', true);
    fireRate = 100;
    nextFire = 0;

    game.add.image(57,300,'wasdad');
    game.add.image(490,300,'wasdws');

    mouse = game.add.image(900, 300, 'mouse');
    mouse.move = 'right';




        const menuButton = game.add.button(50,560,'menuButton',()=>{game.state.start('Menu');},this, 1,3,2)
  },
  update: function(){
    leftRight.body.angularVelocity = 0;
    if (game.input.keyboard.isDown(Phaser.Keyboard.A)||game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
      leftRight.body.angularVelocity = -200;

    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.D)||game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
      leftRight.body.angularVelocity = 200;
    }


    upDown.body.velocity.x = 0;
    upDown.body.velocity.y = 0;

    if (game.input.keyboard.isDown(Phaser.Keyboard.W)||game.input.keyboard.isDown(Phaser.Keyboard.UP)){
      game.physics.arcade.velocityFromAngle(upDown.angle-90, 300, upDown.body.velocity);
    }else if (game.input.keyboard.isDown(Phaser.Keyboard.S)||game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
      game.physics.arcade.velocityFromAngle(upDown.angle-90, -300, upDown.body.velocity);
    }
    if (upDown.y < 89){
      upDown.y = 89
    }else if (upDown.y > 249) {
      upDown.y = 249
    }

    shooter.rotation = game.physics.arcade.angleToPointer(shooter)+ 1.57079633;

    if (game.input.activePointer.isDown) {
      if (game.time.now > nextFire){
        game.world.bringToTop(shooter);
        nextFire = game.time.now + fireRate
        var bullet = ball.getFirstDead();
        bullet.reset(shooter.x, shooter.y);
        game.physics.arcade.moveToPointer(bullet, 300);
      }
    }
    ball.forEach((bullet)=>{
      if (bullet.alive){
        bullet.scale.setTo(1.3,1.3);
      }
      if((bullet.alive)&&((bullet.y>285||bullet.y<50)||(bullet.x<888||bullet.x>1257))){
        bullet.kill();
      }
    });

    if(mouse.move==='right'){
      mouse.x++;
      if(mouse.x === 1000){
        mouse.move = 'left';
      }
    }else{
      mouse.x--;
      if(mouse.x === 900){
        mouse.move = 'right';
      }
    }






  }
};
