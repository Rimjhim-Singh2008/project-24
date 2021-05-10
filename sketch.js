var ground;
var dustbin,dustbin2,dustbin3;
var paper,paperObject;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
	createCanvas(800, 700);

 ground=new Ground(500,670,30,1000);

 dustbin=new Dustbin(560,610,10,80);

 dustbin2=new Dustbin2(700,610,10,80);

 dustbin3=new Dustbin3(630,650,140,10);

 paper=new Paper(100,635,20,20);
 


	engine = Engine.create();
	world = engine.world;

	
	

}


function draw() {
  background("lightBlue");
  Engine.update(engine);

paper.display();
ground.display();
dustbin.display();
dustbin2.display();
dustbin3.display();


  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	 }
   }  

