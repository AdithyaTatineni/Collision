var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200, 400, 20, 20);
  fixedRect.shapeColor="Blue";
  movingRect.shapeColor="Blue";
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2
    ){
    fixedRect.shapeColor="Red";
    movingRect.shapeColor="Red";
  }else{
    fixedRect.shapeColor="Blue";
    movingRect.shapeColor="Blue";
  }
  drawSprites();
}