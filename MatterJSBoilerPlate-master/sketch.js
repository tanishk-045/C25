
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperf 
var world
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

   paperf=new paper(100,750,20)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperf.display()
  
  drawSprites();
 
}



