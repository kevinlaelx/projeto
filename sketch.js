

function preload(){
  seaIMG = loadImage("sea.png")
  shipIMG = loadImage("ship-1.png","ship-2.png")

sea = createSprite(200,200,20,20)
ship = createSprite(1,200,20,20)

}

function setup(){
  createCanvas(400,400);
  
sea.addImage(seaIMG)
ship.addImage(shipIMG)

sea.velocityX=4
}

function draw() {
  background("blue");
    drawSprites();

 
}
