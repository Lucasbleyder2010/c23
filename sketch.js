const Engine= Matter.Engine
const World= Matter.World;
const Body= Matter.Body;
const Bodies = Matter.Bodies
var angle1=30
var angle2=40
var angle3=50
var engine,world;  
function setup() {
  createCanvas(400,400);

  engine=Engine.create()
  world=engine.world
  
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  
//crie o solo
//adicione ao mundo

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  angle1 = Bodies.rectangle(70,300,50,20,angle1_options);
  World.add(world,angle1); 
  
  angle2 = Bodies.rectangle(80,280,50,20,angle2_options);
  World.add(world,angle2); 
  
  angle3 = Bodies.rectangle(90,270,50,20,angle3_options);
  World.add(world,angle3); 
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);

var ground_options ={
  isStatic: true
}

var angle1_options ={
  isStatic: true
};

var angle2_options ={
  isStatic: true
};

var angle3_options ={
  isStatic: true
};

ground = Bodies.rectangle(200,140,400,20,ground_options)
World.add(world,ground)
}
function draw() 
{
  background(51);
  Engine.update(engine);
Fill(ground.position.x,ground.position.y,100,20)
rect(ground.position.x,ground.position.y,20);
ellipse(ground.position.x,ground.position.y,400,20);

Fill(angle1.position.x,angle1.position.y,60,20)
rect(angle1.position.x,angle1.position.y,20);
ellipse(angle1.position.x,angle1.position.y,70,20);

Fill(angle2.position.x,angle2.position.y,70,20)
rect(angle2.position.x,angle2.position.y,30);
ellipse(angle2.position.x,angle2.position.y,80,20);

Fill(angle3.position.x,angle3.position.y,80,20)
rect(angle3.position.x,angle3.position.y,40);
ellipse(angle3.position.x,angle3.position.y,90,20);


Matter.Body.rotate(rotator1,angle1)
push()
translate(rotator1.position.x,rotator1.position.y)
rotate(angle1)
rect(0,0,150,20)
pop();
Matter.Body.rotate(angle1,angle2,angle3)

  
  
}

