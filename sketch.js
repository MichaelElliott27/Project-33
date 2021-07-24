const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,backgroundImg;
var ball,sling;
var kid;
var kidImg;
var snow = [];

function preload() {
  backgroundImg = loadImage("snow1.jpg")
 kidImg = loadImage("kid.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,height,800,20)
  ball = new Ball(400,380,35,35);
 // ball2 = new Ball(560,380,45,45);
  ball3 = new snowball(580,380,45,45);
  ball4 = new snowball(600,380,45,45);
  ball5 = new snowball(620,380,45,45);
  ball6 = new snowball(640,380,45,45);
  ball7 = new snowball(660,380,45,45);
  ball8 = new snowball(680,380,45,45);
  //ball9 = new Ball(700,380,45,45);

 ball10 = new snowball(580,350,45,45);
  ball11 = new snowball(600,350,45,45);
  ball12 = new snowball(620,350,45,45);
  ball13 = new snowball(640,350,45,45);
  ball14 = new snowball(660,350,45,45);
 ball15 = new snowball(680,350,45,45);
 ball16 = new snowball(600,320,45,45);
  ball17 = new snowball(620,320,45,45);
  ball18 = new snowball(640,320,45,45);
  ball19 = new snowball(660,320,45,45);
  ball20 = new snowball(630,300,45,45);




  sling = new Sling(ball.body,{x:270,y:190});
  kid = createSprite(200,280,50,50);
  kid.addImage(kidImg);
  kid.scale = 0.3;
  
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  strokeWeight(1);
  ground.display();
  fill("blue");
  strokeWeight(3);
  ball.display();
  sling.display();
  fill("white")
  //ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
//  ball9.display();
 // ball10.display();
  ball11.display();
  ball12.display();
  ball13.display();
  ball14.display();
  //ball15.display();
 // ball16.display();
  ball17.display();
  ball18.display();
 // ball19.display();
  ball20.display();
  fill("black")
  if(frameCount%60===0){
    snow.push(new Snow(random(width/2-200, width/2+200),10,10));
  }

  for (var a = 0; a < snow.length; a++) {
    snow[a].display();   
  }
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}
function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
      sling.attach(ball.body);
  }
}