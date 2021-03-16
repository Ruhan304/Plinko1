const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var groundimg;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function preload(){
  groundimg = loadImage("iceback.jpg");
}
function setup() { 
  createCanvas(480,800);
  
  back = createSprite(240, 798, 480, 30);
  back.addImage(groundimg);
  back.scale = 0.3;

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 785, 480, 30);

  for (var i = 0; i <= width; i = i + 75){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 50; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 100));
  }
  for (var j = 20; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 200));
  }
  for (var j = 50; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,300));
  }
  for (var j = 20; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 400));
  }


  
}

function draw() {
  Engine.update(engine);
  background(232, 255, 255 );
  
  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }

  ground.display();
  
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  drawSprites();
  
  
}

