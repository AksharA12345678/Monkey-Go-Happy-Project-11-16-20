
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas (400, 400)
  monkey = createSprite (50, 315, 20, 20)
  monkey.addAnimation ("monkey", monkey_running)
  monkey.scale = 0.1
  ground = createSprite(200, 380, 400, 10)
  ground.velocityX = -3
  foodGroup = new Group();
  obstacleGroup = new Group();
  score = 0
}

function spawnFruits(){
  if(frameCount % 100 === 0){
    banana = createSprite (400, 150, 10, 10)
    banana.velocityX = -3
    banana.y = Math.round(random (200, 300))
    banana.addImage (bananaImage)
    banana.scale = 0.1
    foodGroup.add (banana)
    
  }
}


function spawnObstacles(){
  if(frameCount % 100 === 0){
    obstacle = createSprite (400, 370, 10, 10)
    obstacle.velocityX = -3
    obstacle.addImage (obstacleImage)
    obstacle.scale = 0.1
    obstacleGroup.add (obstacle)
    
  }
}




function draw() {
background ("green")
  if(keyDown ("space")){
    monkey.velocityY = -12
  }
  monkey.velocityY += 0.8
  if(ground.x < 200){
  ground.x = ground.width/2   
fill ("black")
    text ("Score: " + score, 300, 50)
    if(monkey.isTouching (foodGroup)){
      score ++ 
      foodGroup.destroyEach();    
    }
    if(monkey.isTouching(obstacleGroup)){
      //obstacleGroup.destroyEach();
      //foodGroup.destroyEach();
      //monkey.destroy();
      text ("Game Over", 180, 200)
      foodGroup.setVelocityXEach(0)
      obstacleGroup.setVelocityXEach(0)    
    }
  }
  monkey.collide (ground)
  spawnFruits();
  spawnObstacles();
  drawSprites ();
  
}






