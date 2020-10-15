var wall, thickness;
var bullet,speed, weight; 

function setup() {
  createCanvas(1600,500);
   bullet= createSprite(50, 200, 50, 50);
   wall= createSprite(1500, 200,30, height/2);
  speed= random(223,321);
  weight= random(30,52);
  thickness= random(22,83);
  wall.shapeColor= "grey";
  bullet.shapeColor= "white";
  bullet.velocityX= speed;
}
function draw() {
 background(0);
  if (hasCollided(bullet, wall)){
  bullet.velocityX= 0;
  var damage= 0.5 * weight * speed* speed/(thickness*thickness*thickness);
  
  if (damage>10){
     wall.shapeColor= "red";
  }
  if (damage<10){
    wall.shapeColor= "green";
  }
  }

  drawSprites();

}
  function hasCollided(Lbullet, Lwall)
{
   var bulletRightEdge= Lbullet.x + Lbullet.width;
   var wallLeftEdge= Lwall.x;
   if (bulletRightEdge>=wallLeftEdge){
     return true; 
   }
     return false; 
}