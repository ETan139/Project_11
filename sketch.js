var path,pathImg
var surfer, surfer_running
var left_invisible_boundary, right_invisible_boundary

function preload(){
  //pre-load images
  pathImg=loadImage("path.png")
  surfer_running=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  // Create Moving background
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;
  // Create running surfer
  surfer = createSprite(201,325,100,100);
  surfer.addAnimation("running", surfer_running);
  surfer.scale=0.1
  // Create left and right invisible boundaries
  left_invisible_boundary= createSprite(1,400,40,800);
  left_invisible_boundary.visible=false;
  right_invisible_boundary= createSprite(400,400,40,800);
  right_invisible_boundary.visible=false;
}

function draw() {
  background(0);
  // Code to reset the background
  if (path.y > 500){
    path.y= height/2;
  }  
  surfer.x = World.mouseX;
  if (surfer.x < 60){
    surfer.x = 60
  }
  if (surfer.x > 350){
    surfer.x = 350
  }
  surfer.collide(left_invisible_boundary);
  surfer.collide(right_invisible_boundary);  
  drawSprites();
  
}

