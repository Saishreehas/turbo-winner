var life=3
var Game,Gameimg
var plane,planeimg
var backgroundimg
var health,healthimg
var gas,gasimg
var bomb,bombimg
var bombgroup
function preload() {
backgroundimg=loadImage("Cloud.jpg")
planeimg=loadImage("Plane.png")
healthimg=loadImage("health.png")
gasimg=loadImage("Gas.png")
bombimg=loadImage("Bomb.png")
Gameimg=loadImage("Game.png")
}



function setup() {
  createCanvas(850,600)

  bg=createSprite(750,300,15000,6000);
  bg.addImage("background",backgroundimg)
  bg.scale=6;
  bg.velocityX=-3;

    plane=createSprite(70,500,10,10)
    plane.addImage("plane",planeimg)
    plane.scale=1
    health=createSprite(700,100,10,10)
    health.addImage("health",healthimg)
    health.scale=0.1
    health2=createSprite(730,100,10,10)
    health2.addImage("health",healthimg)
    health2.scale=0.1
    health3=createSprite(760,100,10,10)
    health3.addImage("health",healthimg)
    health3.scale=0.1

    bombgroup=new Group()
}

function draw() {
  background(backgroundimg);

  if(bg.x<0){
    bg.x=bg.width/7;
  }
  
  if (keyDown("down"))
  {
    plane.y-=-4
  } 
  if(keyDown("up"))
  {
    plane.y-=4
  }
 
  if(plane.isTouching(bombgroup)){
    health.destroy()
    health2.destroy()
    health3.destroy()
    life-=1
  }
  if(life===0){
    Game=createSprite(400,400,10,10)
    Game.addImage("Game",Gameimg)
    Game.scale=0.5
    plane.destroy()
    bombgroup.destroyEach()
  }
  
  
repeat()
  drawSprites();
text("Life: "+life,750,200)
}

function repeat() {
  if(frameCount%100==0)
  {
    bomb=createSprite(600,random(20,600),10,10)
    bomb.addImage("bomb",bombimg)
    bomb.scale=0.5
    bomb.velocityX=-2
    bombgroup.add(bomb)
  }
}
