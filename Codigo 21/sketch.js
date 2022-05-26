
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var ball;
var terra;
var direita;
var esquerda;
var paredao;
var paredao2;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	Engine.run(engine);

	ball=Bodies.circle(200,200,20,ball_options);
    World.add(world,ball);

	terra = new Ground(500,370,1200,15);
	esquerda = new Ground(700,350,15,100);
	direita = new Ground(930,350,15,100);
    paredao=new Ground(1000,200,10,600);
	paredao2=new Ground(0,200,10,600);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function keyPressed(){
	if (keyCode === UP_ARROW){ 
	Matter.Body.applyForce(ball,{x:0,y:0},{x:65,y:-65});
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  terra.show();
  esquerda.show();
  direita.show();
  drawSprites();
 
}



