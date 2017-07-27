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
    splode.play();
    let bg = this.add.image(0,0, 'bg')
    let anchor = {x:0.5,y:0.5};

    const redTank = this.add.sprite(650,400,'redTank');
    const redTurret = this.add.sprite(650,400,'redTurret');
    redTank.animations.add('run',[0,1,2], 3);
    redTank.animations.play('run', 3, true);
    redTank.anchor = anchor;
    redTurret.anchor = anchor;
    redTurret.inputEnabled = true;
    redTank.inputEnabled = true;
    redTank.active = false;
    redTurret.active = false;
    redTank.events.onInputDown.add(()=>{selections.color = 'red';});
    redTurret.events.onInputDown.add(()=>{selections.color = 'red';})
    const blueTank = this.add.sprite(450,400,'blueTank');
    const blueTurret = this.add.sprite(450,400,'blueTurret');
    blueTank.anchor = anchor;
    blueTurret.anchor = anchor;
    blueTurret.active = false;
    blueTank.active = false;
    blueTank.animations.add('run',[0,1,2], 3);
    blueTank.animations.play('run', 3, true);
    blueTurret.inputEnabled = true;
    blueTank.inputEnabled = true;
    blueTank.events.onInputDown.add(()=>{selections.color = 'blue';});
    blueTurret.events.onInputDown.add(()=>{selections.color = 'blue';})
    const purpleTank = this.add.sprite(550,400,'purpleTank');
    const purpleTurret = this.add.sprite(550,400,'purpleTurret');
    purpleTank.anchor = anchor;
    purpleTurret.anchor = anchor;
    purpleTank.active = false;
    purpleTurret.active = false;
    purpleTank.animations.add('run',[0,1,2], 3);
    purpleTank.animations.play('run', 3, true);
    purpleTurret.inputEnabled = true;
    purpleTank.inputEnabled = true;
    purpleTank.events.onInputDown.add(()=>{selections.color = 'purple';});
    purpleTurret.events.onInputDown.add(()=>{selections.color = 'purple';})
    const silverTank = this.add.sprite(850,400,'silverTank');
    const silverTurret = this.add.sprite(850,400,'silverTurret');
    silverTank.anchor = anchor;
    silverTurret.anchor = anchor;
    silverTank.animations.add('run',[0,1,2], 3);
    silverTank.animations.play('run', 3, true);
    silverTurret.inputEnabled = true;
    silverTank.inputEnabled = true;
    silverTank.active = false;
    silverTurret.active = false;
    silverTank.events.onInputDown.add(()=>{selections.color = 'silver';});
    silverTurret.events.onInputDown.add(()=>{selections.color = 'silver';})
    const greenTank = this.add.sprite(750,400,'greenTank');
    const greenTurret = this.add.sprite(750,400,'greenTurret');
    greenTank.anchor = anchor;
    greenTurret.anchor = anchor;
    greenTank.animations.add('run',[0,1,2], 3);
    greenTank.animations.play('run', 3, true);
    greenTurret.inputEnabled = true;
    greenTank.inputEnabled = true;
    greenTank.active = false;
    greenTurret.active = false;
    greenTank.events.onInputDown.add(()=>{selections.color = 'green'});
    greenTurret.events.onInputDown.add(()=>{selections.color = 'green'});
    const startButton = game.add.button(504,560,'startButton',TanksGame.Menu.prototype.validate,this, 1,3,2)
    let gameDiv = document.getElementById('gameContainer');
    let nameForm = document.createElement('input');
    nameForm.type ="text";
    nameForm.id = "nameForm";
    nameForm.placeholder = 'Name';
    nameForm.style.height = '100px';
    nameForm.style.width = '750px';
    let margin = (gameDiv.offsetWidth-1300)/2;
    nameForm.style.left= `${margin+280}px`;
    gameDiv.append(nameForm)
    theNamer = document.getElementById('nameForm');
    $('#nameForm').change(()=>{selections.name = $('#nameForm').val()});
  },
  validate: ()=>{
    TanksGame.Menu.prototype.clearPrompt();
    if(selections.color&&selections.name){
      document.getElementById('nameForm');
      nameForm.remove();
      game.state.start('Play');
    }else if(selections.color&&!selections.name){
      let prompt = game.add.text(555,660,'Please Add Your Name.', {font: 'bold 25px VT323', fill: 'red'})
      prompt.key='';
      prompt.isPrompt = true;
    }else if(!selections.color&&selections.name){
      let prompt = game.add.text(555,660,'Please Choose A Color.', {font: 'bold 25px VT323', fill: 'red'})
      prompt.key='';
      prompt.isPrompt = true;
    }else{
      let prompt = game.add.text(480,660,'Please Choose A Color And Add A Name.', {font: 'bold 25px VT323', fill: 'red'})
      prompt.key='';
      prompt.isPrompt = true;
    }
  },
  clearPrompt: function(){
    game.world.children.forEach((sprite)=>{
      if(sprite.isPrompt){
        sprite.destroy();
      }
    });
  },
  update: function(){
    if(selections.color){
      game.world.children.forEach((sprite)=>{
        if(sprite.key.indexOf(selections.color) >-1){
          sprite.angle+=4;
        }
        else{
          sprite.angle = 0;
        }
      });
    }
},
  useBella: function(){
    selections.color = 'bella';
  }
}
