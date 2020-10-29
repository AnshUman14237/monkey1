
var monkey , monkey_running,foodGroup;
var banana ,bananaImage, obstacle, obstacleImage

var survivaltime = 0;

var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  
createCanvas(600,400);
 
  
  
 
  
  monkey = createSprite(160,200,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  
  foodGroup = new Group();
  
}



function draw() {
  console.log(frameCount);
  
background("green");
  
  ground.velocityX = -4;
  ground.x = ground.width /2;
  
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
     }
        
   
  
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  food();
  obstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,400,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("survivaltime:"+ survivaltime,100,50);
  
  if(foodGroup.isTouching(monkey)){
    score = score+2;
  }  
  
 
  drawSprites();
}

function food(){
  if (frameCount % 80 === 0){    
  banana = createSprite(450,120,10,10);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.y = Math.round(random(120,200));
  banana.velocityX = -2;
  banana.lifetime = 200;
  foodGroup.add(banana);
    }
}

  
 
function obstacles(){
  if (frameCount % 300 ===0 ){
  obstacle = createSprite(450,320,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
 obstacle.velocityX = -2;
  obstacle.lifetime = 200;
  
  }
  
}
  

   




