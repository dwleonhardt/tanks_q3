var Client = {};

Client.socket = io.connect();


Client.socket.on('addTank', function({x,y,id,color,name}){
  TanksGame.Play.prototype.addMe(x,y,id,color,name);
});
Client.socket.on('newBaddy', function({x,y,id,color,name}){
  if(game.state.current==='Play'){
    TanksGame.Play.prototype.addFoe(x,y,id,color,name);
  }
});
Client.socket.on('allPrev', function(data){
  data.forEach((tank)=>{TanksGame.Play.prototype.addFoe(tank.x,tank.y,tank.id,tank.color,tank.name);})
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
    }else if(sprite.isLabel && sprite.id == id){
      sprite.x = x-12;
      sprite.y = y-12;
    }
  })
});
Client.socket.on('shootStream', function({mouseX, mouseY, bulletX, bulletY, bulletId}){

  if(game.state.current==='Play'&&Object.keys(TanksGame.Play.prototype.allTanks).length >1){
    TanksGame.EnemyBullet.prototype.update(mouseX, mouseY, bulletX, bulletY, bulletId);
  }
});
Client.socket.on('quitter', function(info){
  TanksGame.Play.prototype.destroyTheWeak(info);
});
Client.socket.on('deathStream', function({death}){
  TanksGame.Play.prototype.destroyTheWeak(death);
});
Client.addPlayer = function(selections){
  Client.socket.emit('addPlayer', selections);
}
