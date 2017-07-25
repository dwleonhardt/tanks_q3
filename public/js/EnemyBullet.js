TanksGame.EnemyBullet = function (x,y,id) {
  bullets = game.add.group();
  bullets.enableBody = true;
  bullets.createMultiple(50, 'bullet');
  bullets.setAll('checkWorldBounds', true);
  bullets.setAll('outOfBoundsKill', true);

  fireRate = 100;
  nextFire = 0;
}

TanksGame.EnemyBullet.prototype.update =  (mouseX, mouseY, bulletX, bulletY)=> {

  nextFire = game.time.now + fireRate;
  var bullet = bullets.getFirstDead();

  function cats (){
    // console.log(bullet.position);
    for(let i = 0; i<game.world.children.length;i++){
      let thing = game.world.children[i]
      if(thing.key){
      if (thing.key.indexOf('Tank')>-1||thing.key.indexOf('Turret')){
        let left = thing.position.x-25;
        let right = thing.position.x+25;
        let up = thing.position.y-25;
        let down = thing.position.y+25;
        if ((bullet.position.x>left && bullet.position.x<right)&&(bullet.position.y>up&&bullet.position.y<down)){
          console.log('you hit me!');
        }
      }
    }
    }
    if(bullet.position.x <0 || bullet.position.y<0){
      console.log('the end');
      clearInterval(bulletTracker);
    }
  }
  bulletTracker = setInterval(cats, 10);
  // console.log(bullet);

  bullet.reset(bulletX, bulletY);

  game.physics.arcade.moveToXY(bullet, mouseX, mouseY, 300);
}
