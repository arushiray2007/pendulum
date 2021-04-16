const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const World=Matter.World;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var chain1,roof1;

function preload(){

}

function setup(){

	createCanvas(1000,800);

	engine = Engine.create();
	world = engine.world;

	

	bob1=new Bob(400,600,20);
	bob2=new Bob(440,600,20);
	bob3=new Bob(480,600,20);
	bob4=new Bob(520,600,20);
	bob5=new Bob(560,600,20);

	roof1=new Roof(500,300,600,10);

	chain1=new Chain(bob1.body,roof1.body,-80,0);
	chain2=new Chain(bob2.body,roof1.body,-40,0);
	chain3=new Chain(bob3.body,roof1.body,0,0);
	chain4=new Chain(bob4.body,roof1.body,40,0);
	chain5=new Chain(bob5.body,roof1.body,80,0)

	

	//Engine.run(engine);

}

function draw(){

	rectMode(CENTER);
	Engine.update(engine);
	background("lightblue");

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	roof1.display();
	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
	//drawSprites();


}

function keyPressed(){

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}