var path,Runner;
var pathImage,RunnerImage;

function preload(){
  //pre-load images
  pathImage= loadImage("path.png");
RunnerImage = loadAnimation("Runner-1.png,Runner-2.png");
}

function setup(){
  createCanvas(400,400);
    //create sprites here
  path = createSprite(200,200);
  path.addImage("path",pathImage);
  path.velocityY = 4;
  
  Runner = createSprite(50,160,20,50);
  Runner.addAnimation(" Runner",RunnerImage );
  Runner.scale = 0.5;



}
function draw() {
  background(0);
  
 Runner.mouseX()= world.x;
Runner.mouseY()= world.y;

drawSprites();
}
