
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;

//players
player=new Player(300, 300);

//ropes
rope=new Rope(player.body, {x:300, y:100});

//grounds
ground1=new Ground(700, 590, 1400, 50);
ground2=new Ground(1390, 300, 50, 600);
ground3=new Ground(700, 10, 1400, 50);
ground4= new Ground(10, 300, 50, 600);

pin1= new Pin(1300, 535, 50, 50);
pin2=new Pin(900, 535, 50, 50);
pin3= new Pin(1300, 485, 50, 50);
pin4=new Pin(900, 485, 50, 50);
pin5= new Pin(1100, 465, 450, 10);

pin6= new Pin(1300, 435, 50, 50);
pin7= new Pin(900, 435, 50, 50);
pin8= new Pin(1300, 385, 50, 50);
pin9= new Pin(900, 385, 50, 50);
pin10= new Pin(1100, 365, 450, 10);





	Engine.run(engine);
  
}


function draw() {
  background(0);
  textSize(20);
  fill("white");
  text("press space when ball stops moving to put ball on slingshot again",400, 100);
  text("If you hit the blocks hard enough they will disapear", 390, 150);
  textSize(30);
  text("ball speed:", 1050, 100);
  text(player.body.speed, 1200, 100);
//display bodies here
player.display();
rope.display();
ground1.display();
ground2.display();
ground3.display();
ground4.display();

pin1.display();
pin2.display();
pin3.display();
pin4.display();
pin5.display();
pin6.display();
pin7.display();
pin8.display();
pin9.display();
pin10.display();


}

function mouseDragged(){
        Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
   
}

function keyPressed(){
	if(keyCode===32&&player.body.speed<3){
     Matter.Body.setPosition(player.body, {x:300, y:300});
	 rope.attach(player.body);
	 player.trajectory=[];
	}
}
