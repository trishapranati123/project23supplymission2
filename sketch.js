var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1Sprite=createSprite(420,650,200,20);
	box1Sprite.shapeColor=color("red");

	box2Sprite=createSprite(330,600,20,100);
	box2Sprite.shapeColor=color("red");

	box3Sprite=createSprite(510,600,20,100);
	box3Sprite.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1400,20);
  //ellipseMode(RADIUS);
  //ellipse(packageBody.position.x, packageBody.position.y, 20, 20);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y  	
  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on	
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:false});
	//World.add(world, packageBody);
	 Matter.Body.setStatic(packageBody,false);
	
  }
}



