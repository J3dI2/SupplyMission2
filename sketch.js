var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3

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

	helicopterSprite=createSprite(100, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	

	//create the box
	box1=createSprite(width/2,652,200,15, {isStatic:true});
	box1.shapeColor=color("red");
	box2=createSprite(307,600,15,100, {isStatic:true});
	box2.shapeColor=color("red");
	box3=createSprite(493,600,15,100, {isStatic:true});
	box3.shapeColor=color("red");

	box1=Bodies.rectangle(width/2,652,200,15, {isStatic:true});
	box2=Bodies.rectangle(307,600,15,100, {isStatic:true});
	box3=Bodies.rectangle(493,600,15,100, {isStatic:true});

	World.add(world, ground,box1,box2,box3);

	Engine.run(engine);
  
}


function draw() {

	Engine.update(engine);

	rectMode(CENTER);
	background(0);	

	packageSprite.visible=false;

	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

	keyPressed();
	RightMovement();

	drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
	packageSprite.visible=true;
  }
}

function RightMovement() {
	if (keyCode === RIGHT_ARROW) {
		helicopterSprite.velocityX=5;
	} else {
		helicopterSprite.velocityX=0;
	}
}
