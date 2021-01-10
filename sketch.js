var goku
var frieza
var kamehameha,beam,kiBlast,deathBeam
var gokuPose
var gokuSuperSaiyan
var gokuAttack
var gokuKamehameha
var gokuSaiyanKamehameha

var friezaPose
var friezaBeam
var goldenFriezaPose
var friezaDeathBeam
var friezaGoldenBeam

var backgroundImage
var invisibleGround
var attack 
var attack2
var attack3
var attack4
var attack5

function preload(){
  backgroundImage=loadImage("fighting background.jpg")
  gokuPose=loadAnimation("gokupose.png")
  gokuSuperSaiyan=loadAnimation("gokusupersaiyan.png")
  gokuAttack=loadAnimation("gokuattack.png")
  gokuKamehameha=loadAnimation("gokukamehameha.png")
  gokuSaiyanKamehameha=loadAnimation("gokusaiyankamehameha.png")
  friezaPose=loadAnimation("friezapose.png")
  friezaBeam=loadAnimation("friezabeam.png")
  goldenFriezaPose=loadAnimation("goldenfriezapose.png")
  friezaGoldenBeam=loadAnimation("friezagoldenbeam.png")
  friezaDeathBeam=loadAnimation("friezadeathbeam.png")
  attack=loadAnimation("ki blast.png")
  attack2=loadAnimation("attack2-removebg-preview.png")
  attack3=loadAnimation("attack2-removebg-preview.png")
  attack4=loadAnimation("attack4.png")
  attack5=loadAnimation("attack4.png")
  attack6=loadAnimation("attack4.png")

  
}

function setup(){
  createCanvas(displayWidth,displayHeight-250)
  goku=createSprite(130,displayHeight-500,35,50);
  goku.addAnimation("gokuPose",gokuPose)
  goku.addAnimation("gokuAttack",gokuAttack)
  goku.addAnimation("gokuKamehameha",gokuKamehameha)
  goku.addAnimation("gokuSuperSaiyan",gokuSuperSaiyan)
  goku.addAnimation("gokuSaiyanKamehameha",gokuSaiyanKamehameha)

  frieza=createSprite(1300,displayHeight-500,25,40);
  frieza.addAnimation("friezaPose",friezaPose)
  frieza.addAnimation("friezaBeam",friezaBeam)
  frieza.addAnimation("goldenFriezaPose",goldenFriezaPose)
  frieza.addAnimation("friezaGoldenBeam",friezaGoldenBeam)
  frieza.addAnimation("friezaDeathBeam",friezaDeathBeam)

  Attack=createSprite(200,250,70,5)
 Attack.visible=false;
  
  Attack.addAnimation("kiBlast",attack)

 Attack.scale=0.2;
  Attack2=createSprite(200,250,100,30);
  Attack2.addAnimation("attack2",attack2)
  Attack2.visible=false;

  Attack3=createSprite(200,250,100,30);
  Attack3.visible=false;
  Attack3.addAnimation("attack3",attack3)

  Attack4=createSprite(1200,350,50,30);
  Attack4.visible=false;
  Attack4.addAnimation("attack4",attack4)
  Attack4.scale=0.2

  Attack5=createSprite(1200,350,50,30)
  Attack5.visible=false;
  Attack5.addAnimation("attack5",attack5);
  Attack5.scale=0.2;
  
  Attack6=createSprite(1200,350,50,30)
  Attack6.addAnimation("attack6",attack6)
  Attack6.scale=0.2;
  Attack6.visible=false;

  

  invisibleGround = createSprite(displayWidth/2,displayHeight-350,displayWidth,30);

  
}



function draw(){

  background(backgroundImage);
  if(keyDown("w")){
    goku.y=goku.y-10
  }

  if(keyDown("s")){
    goku.y=goku.y+10
  }
  if(keyDown("d")){
    goku.x=goku.x+10
  }
  if(keyDown("a")){
    goku.x=goku.x-10
  }
  if(keyDown("space")){
    goku.velocityY=-10
  }
  goku.velocityY=goku.velocityY+0.6
  if(keyDown("UP_ARROW")){
    frieza.y=frieza.y-10
  }
  if(keyDown("DOWN_ARROW")){
    frieza.y=frieza.y+10
  }
  if(keyDown("RIGHT_ARROW")){
    frieza.x=frieza.x+10
  }

  if(keyDown("LEFT_ARROW")){
    frieza.x=frieza.x-10
  }
    if(keyDown("n")){
      frieza.velocityY=-10;
    }

    if(keyDown("k")){
      goku.changeAnimation("gokuAttack",gokuAttack)
      goku.scale=0.8
    Attack.velocityX=10;
    Attack.visible=true;
   
    }
    if(keyDown("m")){
      goku.changeAnimation("gokuKamehameha",gokuKamehameha)
      goku.scale=0.8
      Attack3.velocityX=10;
      Attack3.visible=true;
    }
    if(keyDown("x")){
      goku.changeAnimation("gokuSuperSaiyan",gokuSuperSaiyan)
    }

  if(keyDown("f")){
    goku.changeAnimation("gokuSaiyanKamehameha",gokuSaiyanKamehameha)
    goku.scale=0.7
    Attack2.velocityX=15;
    Attack2.visible=true;
    
  }
  if(keyDown("l")){
    frieza.changeAnimation("friezaBeam",friezaBeam)
    frieza.scale=0.7
    Attack4.velocityX=-10;
    Attack4.visible=true;

  }

  if(keyDown("j")){
    frieza.changeAnimation("goldenFriezaPose",goldenFriezaPose);
  }
  if(keyDown("v")){
    frieza.changeAnimation("friezaGoldenBeam",friezaGoldenBeam)
    frieza.scale=0.7
    Attack5.velocityX=-15;
    Attack5.visible=true;
  }
  if(keyDown("b")){
    frieza.changeAnimation("friezaDeathBeam",friezaDeathBeam)
    Attack6.velocityX=-20;
    Attack6.visible=true;
  } 
  
  
   
    
  
frieza.velocityY=frieza.velocityY+0.6
  goku.collide(invisibleGround);
  frieza.collide(invisibleGround);
  invisibleGround.visible=true;
  drawSprites();
  
}
