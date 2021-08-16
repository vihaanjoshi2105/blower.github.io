const Engine=Matter.Engine
const Render=Matter.Render
const World=Matter.World
const Body=Matter.Body
const Bodies=Matter.Bodies
const Composites=Matter.Composites
const Constraint=Matter.Constraint
var engine
var world
var ball1
var blower1
var blowermouth1
var button1

function setup() {
  var Canvas=createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  blower1=new Blower(402,226,150,20)
  ball1= new Ball(460,152,70)
  blowermouth1=new Blowermouth(width/2+70,height/2+20,100,90)
  button1=createButton("click to blow!")
  button1.position(width/2,height-100)
  button1.class("blowButton")
  button1.mousePressed(blow)
}

function draw() {

  background("white");
  text(mouseX+","+mouseY,mouseX,mouseY)
  Engine.update(engine) 
  blower1.show()
  ball1.show()
  blowermouth1.show()
  
}
function blow(){
Matter.Body.applyForce(ball1.body,{x:0,y:0},{x:0,y:0.55})


}



