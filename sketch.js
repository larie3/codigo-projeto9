var bola;
var fundo;
function setup() {
  createCanvas(400,400);
  fundo = createSprite(200,200,400,400,);
  fundo.shapeColor = "blue" ;
  bola = createSprite(200,200,20,20);
}

function draw() {
   if (keyDown("LEFT")){
     fundo.shapeColor = "green";
   }
   if (keyDown("RIGHT")){
     fundo.shapeColor = "purple";
   }
  drawSprites();
}

