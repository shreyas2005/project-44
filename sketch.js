var ground,chracter;
var ob,ob2,ob3,ob4,ob5,line,ob6,ob7;
var trap1;
var wall,wall2,wall3,wall4;
var idle;
var running;
var pad,pad1;;
var up,platform;
var buildimg;
function preload(){

  //loading images
  idle=loadImage('sprites/char.png');
  buildimg=loadImage('sprites/build.png');
  //loading animation
   running=loadAnimation("sprites/run1.png","sprites/run2.png","sprites/run3.png","sprites/run4.png","sprites/run5.png");

}
function setup() {
  createCanvas(displayWidth,displayHeight/2+200);

  //creation of sprites and enemies
  ground=createSprite(displayWidth/2,displayHeight/2+500,10000000,1000);
  // ground.shapeColor="";
  ob=createSprite(1300,150,100,20);
  ob2=createSprite(1100,350,100,250);
  chracter=createSprite(900 ,475,50,100);
  wall=createSprite(200,150,500  ,10000);
  ob3=createSprite(2000,100,300,20);
  trap1=createSprite(1600,275,75,20);
  ob4=createSprite(2300,275,100,20);
  wall2=createSprite(2800,275,100,220);
  wall3=createSprite(2100,250,75,200);
  ob5=createSprite(3200,100 ,100,20);
  line=createSprite(3500,100,300,20);
  wall4=createSprite(3900,300,100,200);
  ob6=createSprite(4300,100,50,20);
  platform=createSprite(5300,200,150,400);
  ob7=createSprite(4900,100,100,20);

  //setting images to the sprites and enemies
    chracter.addImage(idle);
    wall.addImage(buildimg);

  //setting size 
      chracter.scale=2;
      


}

function draw() {
  background(0,0,0);  

  //setting camera for sprites
  camera.position.x=chracter.x;
  camera.position.y=chracter.y;

//collide code
  chracter.collide(ground);
  chracter.collide(ob);
  chracter.collide(ob2);
  chracter.collide(wall);
  chracter.collide(ob3);
  chracter.collide(trap1);  
  chracter.collide(ob4);
  chracter.collide(wall2);
  chracter.collide(wall3);
  chracter.collide(ob5);
  chracter.collide(line); 
  chracter.collide(wall4);
  chracter.collide(ob6);
  chracter.collide(ob7);
  chracter.collide(platform);



  //colour area

  //gravity
  chracter.velocityY+=1;

  //movement of the sprites
  if (keyDown("UP_ARROW")&&keyDown("RIGHT_ARROW")) {
    chracter.x+=8;
    chracter.y-=16;
  }
  if (keyDown("UP_ARROW")&&keyDown("LEFT_ARROW")) {
    chracter.x-=5;
    chracter.y-=15;
  }
  if (keyDown("DOWN_ARROW")) {
    chracter.x+=5;
    chracter.y+=18;
  }
  if (keyDown("RIGHT_ARROW")) {
    chracter.x+=8;
    chracter.addAnimation("running",running);
  }
   if (keyDown("LEFT_ARROW")) {
    chracter.x-=8;
  }
  
  drawSprites();
}