var packageBody,ground
const Engine = Matter.Engine;
const wor = Matter.World;
const bod = Matter.Bodies;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

var helicopterIMG, helicopterSprite, packageSprite,packageIMG,bar1,bar2,bar3,world,engine;

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


	engine = Engine.create();
	world = engine.world;

	packageBody = bod.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	wor.add(world, packageBody);
	

	//Create a Ground
	ground = bod.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	wor.add(world, ground);

	bar1= new box(100,100,11,11);
	bar2= new box(100,10,22,22);
	bar3= new box(12,12,12,12);
	 
}


function draw() {
  rectMode(CENTER);

  background(0);
  
  Engine.update(engine);

  bar1.display();
  bar2.display();
  bar3.display();
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  keyPressed();
 
  drawSprites();

  text("Press Ctrl+R To Reset",100,100);

}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
    Matter.Body.setStatic( packageBody , false);
}
}

