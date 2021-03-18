var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
   ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  score=0;
  
  obstacleGroup=new Group();
  FoodGroup=new Group();
  
}


function draw() {

 background("green") ;
 
  
  stroke("white");
  textSize(20);
  fill("white")
  text("score :"+500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50);
    
  text("score:"+score,500,50)
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
       
    }
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  spawnobstacles();
  spawnbanana();
  if(obstacleGroup.isTouching(monkey)){
     ground.velocityX=0
    monkey.velocityY=0
    FoodGroup.setVelocityXEach(0)
    obstacleGroup.setVelocityXEach(0)
     obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
     
     }
  
  drawSprites();
  
}
function spawnobstacles(){
  if (frameCount % 300===0){
      var obstacle=createSprite(800,320,10,40)
    obstacle.velocityX= -6
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2
    obstacle.lifetime=300
    obstacleGroup.add(obstacle)
    
      }
}

function spawnbanana(){
  if (frameCount % 80===0){
  var fruit=createSprite(600,250,40,10)
  fruit.velocityX= -6
    fruit.addImage(bananaImage)
    fruit.scale=0.1
     fruit.lifetime=300
      FoodGroup.add(fruit)
    
   
   
      }
}



