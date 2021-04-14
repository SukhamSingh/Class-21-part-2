var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bekar(movingRect,fixedRect);
  
  drawSprites();
}

function bekar(r3,r4){
  if (r3.x - r4.x < r4.width/2 + r3.width/2
    && r4.x - r3.x < r4.width/2 + r3.width/2) {
  r3.velocityX = r3.velocityX * (-1);
  r4.velocityX = r4.velocityX * (-1);
}
if (r3.y - r4.y < r4.height/2 + r3.height/2
  && r4.y - r3.y < r4.height/2 + r3.height/2){
  r3.velocityY = r3.velocityY * (-1);
  r4.velocityY = r4.velocityY * (-1);
}
}