var fixedRect, movingRect,o1,o2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "red";
  movingRect.debug = true;
  o1 = createSprite(100, 100, 50, 80);
  o1.shapeColor = "purple";
  o1.debug = true;
  o2 = createSprite(600, 100, 50, 80);
  o2.shapeColor = "yellow";
  o2.debug = true;


 // movingRect.velocityY = -5;
 // fixedRect.velocityY = +5;
  o1.velocityX=+5;
  o2.velocityX=-5;
}

function draw() {
  background(0,0,0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  bounceOff(o1,o2);
//bounceOff(movingRect,fixedRect);
if(isTouching(movingRect,fixedRect))
{
  movingRect.shapeColor= color(World.mouseX,100,World.mouseY);
}else
{
 movingRect.shapeColor = "orange";
}
  drawSprites();
}

function bounceOff(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2) {
  ob1.velocityX = ob1.velocityX * (-1);
  ob2.velocityX = ob2.velocityX * (-1);
}
if (ob1.y - ob2.y < ob2.height/2 + ob1.height/2
  && ob2.y - ob1.y < ob2.height/2 + ob1.height/2){
  ob1.velocityY = ob1.velocityY * (-1);
  ob2.velocityY = ob2.velocityY * (-1);
}
}
function isTouching(ob1,ob2){
if(ob1.x-ob2.x < ob2.width/2 +ob1.width/2
  && ob2.x-ob1.x< ob2.width/2 + ob1.width/2
  && ob1.y- ob2.y < ob2.height/2 + ob1.height/2
  && ob2.y - ob1.y < ob2.height/2 + ob1.height/2){
    return true;
  }
  else return false;
  }
