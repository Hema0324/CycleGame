
var path,pathImg;
var player1,player2,player3;
var mainPlayerImg,mainCyclist;


function preload()
{
 pathImg = loadImage("Road.png")
 mainPlayerImg = loadAnimation("mainPlayer1.png","mainPlayer2.png")

}

function setup()
{
  createCanvas(1200,300)

  path = createSprite(100,150)
  path.addImage(pathImg)
  path.velocityX = -5
  

  mainCyclist = createSprite(70,150)
  mainCyclist.addAnimation("Running",mainPlayerImg)
  mainCyclist.scale = 0.08


 
}

function draw()
{
  background("white")
  if(path.x<0)
  {
    path.x = path.width/2
  }
  drawSprites()

}