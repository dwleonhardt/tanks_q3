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
Client.socket.on('quitter', function(info){
  TanksGame.Play.prototype.destroyTheWeak(info);
});
Client.addPlayer = function(){
  Client.socket.emit('addPlayer');
}
