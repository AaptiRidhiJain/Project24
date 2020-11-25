
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world

    paper = new Box(x,y,width,height);

  Engine.run(engine);
  
  paper = new Paper(700,240,300,240); 
  ground = new Ground(700,700,700,700);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObect.body,position,{x:85,y:-85});
  }
}

