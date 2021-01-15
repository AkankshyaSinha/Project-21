var bullet, wall
var speed, weight, thickness

function setup() {
  createCanvas(800,400);
  speed= random(223, 321)
  weight= random(30, 52)
  thickness= random(22, 83)
  //createSprite(400, 200, 50, 50);
  bullet= createSprite(50, 200, 40, 10)
  wall= createSprite(600, 200, thickness, height/2)
  wall.shapeColor= color(80, 80, 80)
  wall.debug= true
}

function draw() {
  background("lightblue");  
  bullet.velocityX= speed
  
  //if (wall.x- bullet.x< (bullet.width+ wall.width)/2) {
    if (hasCollided (bullet, wall)) {
    bullet.velocityX= 0
    //bullet.collide(wall)
    console.log("testing")

    var damage= 0.5 * weight * speed * speed/(thickness * thickness * thickness)
    
    if (damage> 10) {
      wall.shapeColor= color(255, 0, 0)
      //console.log("testing")
    }

    if (damage< 10) {
      wall.shapeColor= color(0, 255, 0)
      console.log("testing")
    }
  }

  drawSprites();
}

function hasCollided(obj1, obj2) {

obj1RightEdge= obj1.x+ obj1.width
obj2LeftEdge= obj2.x

if (obj1RightEdge>= obj2LeftEdge) {
  return true
}
  return false
}

