var fixedrect, movingrect;
var gameobject1, gameobject2, gameobject3;


function setup() {
  createCanvas(1200,800);
 fixedrect =  createSprite(600, 400, 50, 80);
 fixedrect.shapeColor = "green";

 movingrect =  createSprite(400, 200, 80, 30);
 movingrect.shapeColor = "green";

gameobject1 = createSprite(500, 200, 70, 40)
gameobject1.shapeColor = "red"

gameobject2 = createSprite(200, 600, 50, 30)
gameobject2.shapeColor = "purple"

gameobject3 = createSprite(800, 600, 80, 50)
gameobject3.shapeColor = "brown"
}

function draw() {
  background(0);  

  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if(isTouching(gameobject3, movingrect))
  {
    gameobject3.shapeColor = "orange";
    movingrect.shapeColor = "orange";
  }
  else 
  {
    gameobject3.shapeColor = "blue";
    movingrect.shapeColor = "blue";
  }


  drawSprites();
}


