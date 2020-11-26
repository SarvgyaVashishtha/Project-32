const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var poly_img;
var score = 0;
function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(1242,567);
  
  engine = Engine.create();
  world = engine.world; 


  fill("purple");
  box1 = new Box(430,455,40,60);
  box1.score();
  box2 = new Box(470,455,40,60);
  box2.score();
  box3 = new Box(510,455,40,60);
  box3.score();
  box4 = new Box(550,455,40,60);
  box4.score();
  box5 = new Box(590,455,40,60);
  box5.score();
  box6 = new Box(630,455,40,60);
  box6.score();
  box7 = new Box(670,455,40,60);
  box7.score();
  box8 = new Box(900,215,40,60);
  box8.score();
  box9 = new Box(940,215,40,60);
  box9.score();
  box10 = new Box(980,215,40,60);
  box10.score();
  box11 = new Box(1020,215,40,60);
  box11.score();
  box12 = new Box(1060,215,40,60);
  box12.score();
  box13 = new Box(470,400,40,60);
  box13.score();
  box14 = new Box(510,400,40,60);
  box14.score();
  box15 = new Box(550,400,40,60);
  box15.score();
  box16 = new Box(590,400,40,60);
  box16.score();
  box17 = new Box(630,400,40,60);
  box17.score();
  box18 = new Box(510,350,40,60);
  box18.score();
  box19 = new Box(550,350,40,60);
  box19.score();
  box20 = new Box(590,350,40,60);
  box20.score();
  box21 = new Box(550,100,40,60);
  box21.score();
  box22 = new Box(940,180,40,60);
  box22.score();

  box23 = new Box(980,180,40,60);
  box23.score();
  box24 = new Box(1020,180,40,60);
  box24.score();
  box25 = new Box(980,120,40,60);
  box25.score();

  ground1 = new Ground(615,562,1253,10);
  ground2 = new Ground(540,460,400,15);
  ground3 = new Ground(995,250,350,15);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});
  
}

function draw() {
  background("black");
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  Engine.update(engine); 
  ground1.display();
  fill("white")
        text("Score  " + score, width-300, 50)
  ground2.display(); 
  ground3.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}