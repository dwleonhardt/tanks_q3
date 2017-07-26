const selections ={
  name: '',
  color: ''
}
TanksGame.Menu = function(game){

}
TanksGame.Menu.prototype = {

  preload: function(){
    this.load.image('bg', '/assets/menu.png', 1300, 700);
    this.load.spritesheet('blueTank', '/assets/blue_tank.png', 50,50,3);
    this.load.spritesheet('purpleTank', '/assets/purple_tank.png', 50,50,3);
    this.load.spritesheet('redTank', '/assets/red_tank.png', 50,50,13);
    this.load.spritesheet('silverTank', '/assets/silver_tank.png', 50,50,3);
    this.load.spritesheet('greenTank', '/assets/green_tank.png', 50,50,13);
    this.load.spritesheet('bullet', '/assets/bullet.png', 50, 50, 1);
    this.load.spritesheet('blueTurret', '/assets/blue_tank_top.png', 50, 50, 1);
    this.load.spritesheet('redTurret', '/assets/red_tank_top.png', 50, 50, 1);
    this.load.spritesheet('silverTurret', '/assets/silver_tank_top.png', 50, 50, 1);
    this.load.spritesheet('greenTurret', '/assets/green_tank_top.png', 50, 50, 1);
    this.load.spritesheet('purpleTurret', '/assets/purple_tank_top.png', 50, 50, 1);
    this.load.spritesheet('startButton', '/assets/play_button_2.png', 325, 97);
  },
  create: function(){
    let bg = this.add.image(0,0, 'bg')
    let anchor = {x:0.5,y:0.5};

    const redTank = this.add.sprite(650,300,'redTank');
    const redTurret = this.add.sprite(650,300,'redTurret');
    redTank.animations.add('run',[0,1,2], 3);
    redTank.animations.play('run', 3, true);
    redTank.anchor = anchor;
    redTurret.anchor = anchor;
    redTurret.inputEnabled = true;
    redTank.inputEnabled = true;
    redTank.events.onInputDown.add(()=>{selections.color = 'red';TanksGame.Menu.prototype.moveOn = true;});
    redTurret.events.onInputDown.add(()=>{selections.color = 'red';TanksGame.Menu.prototype.moveOn = true;})
    const blueTank = this.add.sprite(450,300,'blueTank');
    const blueTurret = this.add.sprite(450,300,'blueTurret');
    blueTank.anchor = anchor;
    blueTurret.anchor = anchor;
    blueTank.animations.add('run',[0,1,2], 3);
    blueTank.animations.play('run', 3, true);
    blueTurret.inputEnabled = true;
    blueTank.inputEnabled = true;
    blueTank.events.onInputDown.add(()=>{selections.color = 'blue';TanksGame.Menu.prototype.moveOn = true;});
    blueTurret.events.onInputDown.add(()=>{selections.color = 'blue';TanksGame.Menu.prototype.moveOn = true;})
    const purpleTank = this.add.sprite(550,300,'purpleTank');
    const purpleTurret = this.add.sprite(550,300,'purpleTurret');
    purpleTank.anchor = anchor;
    purpleTurret.anchor = anchor;
    purpleTank.animations.add('run',[0,1,2], 3);
    purpleTank.animations.play('run', 3, true);
    purpleTurret.inputEnabled = true;
    purpleTank.inputEnabled = true;
    purpleTank.events.onInputDown.add(()=>{selections.color = 'purple';TanksGame.Menu.prototype.moveOn = true;});
    purpleTurret.events.onInputDown.add(()=>{selections.color = 'purple';TanksGame.Menu.prototype.moveOn = true;})
    const silverTank = this.add.sprite(850,300,'silverTank');
    const silverTurret = this.add.sprite(850,300,'silverTurret');
    silverTank.anchor = anchor;
    silverTurret.anchor = anchor;
    silverTank.animations.add('run',[0,1,2], 3);
    silverTank.animations.play('run', 3, true);
    silverTurret.inputEnabled = true;
    silverTank.inputEnabled = true;
    silverTank.events.onInputDown.add(()=>{selections.color = 'silver';TanksGame.Menu.prototype.moveOn = true;});
    silverTurret.events.onInputDown.add(()=>{selections.color = 'silver';TanksGame.Menu.prototype.moveOn = true;})
    const greenTank = this.add.sprite(750,300,'greenTank');
    const greenTurret = this.add.sprite(750,300,'greenTurret');
    greenTank.anchor = anchor;
    greenTurret.anchor = anchor;
    greenTank.animations.add('run',[0,1,2], 3);
    greenTank.animations.play('run', 3, true);
    greenTurret.inputEnabled = true;
    greenTank.inputEnabled = true;
    greenTank.events.onInputDown.add(()=>{selections.color = 'green';TanksGame.Menu.prototype.moveOn = true;});
    greenTurret.events.onInputDown.add(()=>{selections.color = 'green';TanksGame.Menu.prototype.moveOn = true;});
    const startButton = game.add.button(504,560,'startButton',function(){},this, 1,3,2)

    let gameDiv = document.getElementById('gameContainer');
    let nameForm = document.createElement('input');
    nameForm.type ="text";
    nameForm.id = "nameForm";
    nameForm.placeholder = 'Name';
    gameDiv.append(nameForm);
    theNamer = document.getElementById('nameForm');
    theNamer.addEventListener('change', ()=>{console.log('click');})

  },
  update: function(){
    if(selections.color&&selections.name){
      this.state.start('Play');
    }
},
  useBella: function(){
    selections.color = 'bella';
  }

}
