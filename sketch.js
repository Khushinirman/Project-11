  var pathImg,path;
  var boyImg,boy;
  var boundryleft, boundryright;
  var coin1, coin2, coinImg;
 
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  coinImg = loadImage("coin.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,700);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);

  coin1 = createSprite(200,350);
  coin1.addImage(coinImg);

  coin2 = createSprite(200,650);
  coin2.addImage(coinImg);
  
  boy = createSprite(300,500);
  //boy.addImage(boyImg);
  boy.addAnimation("running", boyImg);

  path.velocityY = 10;
  coin1.velocityY = 10;
  coin2.velocityY = 10;
  path.scale = 1.2;
  boy.scale = 0.07;
  coin1.scale = 0.2;
  coin2.scale = 0.2;

  boundryleft = createSprite(30,350,10,700);
  boundryright = createSprite(370,350,10,700);
  boundryleft.visible = false;
  boundryright.visible = false;
}

function draw() {
  background(0);

  if(path.y > 500){
    path.y = height/2;
  }

  if(coin1.y > 700){
    coin1.y = 100;
    coin1.x = 300;
  }
  if(coin2.y > 700){
    coin2.y = 200;
    coin2.x = 200;
  }
  boy.x = mouseX;

  if(boy.x < 40){
    boy.x= 40;
  }
  
  if(boy.x > 370){
    boy.x=370;
  }

  boy.collide(boundryleft);
  boy.collide(boundryright);

  drawSprites();
  
}

