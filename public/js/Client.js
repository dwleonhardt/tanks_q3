var Client = {};
Client.socket = io.connect();

Client.socket.on('addTank', function({x,y,id}){
  TanksGame.Play.prototype.addMe(x,y,id);
});
Client.socket.on('newBaddy', function({x,y,id}){
  TanksGame.Play.prototype.addFoe(x,y,id);
});
Client.socket.on('allPrev', function(data){
  data.forEach((tank)=>{TanksGame.Play.prototype.addFoe(tank.x,tank.y,tank.id);})
});
Client.socket.on('moveStream', function({x,y,id,tankAngle,turretAngle}){
  game.world.children.forEach((sprite)=>{

    if(sprite.id === id && sprite.key.indexOf('Tank') >-1){
      sprite.x = x;
      sprite.y = y;
      sprite.angle = tankAngle;
    }else if (sprite.id === id &&sprite.key.indexOf('Turret')>-1){
      sprite.x = x;
      sprite.y = y;
      sprite.angle = turretAngle;
    }
  })
});
Client.socket.on('shootStream', function({mouseX, mouseY, bulletX, bulletY}){
  TanksGame.EnemyBullet.prototype.update(mouseX, mouseY, bulletX, bulletY)
});
Client.socket.on('quitter', function(info){
  TanksGame.Play.prototype.destroyTheWeak(info);
});
Client.addPlayer = function(){
  Client.socket.emit('addPlayer');
}
