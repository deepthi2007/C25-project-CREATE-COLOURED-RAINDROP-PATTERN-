const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var rain=[];

var rainImg, drop;
var maxDrops=300;



function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  /*
for(var i=0;i>2000;i++){
  rain.push(new Drop(random(0,800),random(i,400)));
} */

for(var i=0;i<maxDrops;i++){
  rain.push(new Drops(random(0,800),random(i,800)))
}
 
}

function draw() {
  background(0,0,0);  

  Engine.update(engine);
/* 
  for(var i=0;i>=rain.length;i++){
    rain[i].display();
  } */

  for(var i=0;i<rain.length;i++){
    rain[i].display();
    rain[i].update();
}

  drawSprites();
}
