
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;
//gifts
gift1=new Gift(750, 370, 30, 30);

//players
player=new Player(200, 200);

//ropes
rope=new Rope(player.body, {x:200, y:100});

//grounds
ground1=new Ground(700, 390, 1400, 20);
ground2=new Ground(1390, 300, 20, 600);
ground3=new Ground(700, 10, 1400, 20);
ground4= new Ground(10, 300, 20, 600);

//pins
pin1=new Pin(600, 350, 50, 50);
pin2=new Pin(600, 300, 50, 50);
pin3=new Pin(600, 250, 50, 50);
pin4=new Pin(600, 200, 50, 50);
pin5=new Pin(600, 150, 50, 50);
pin6=new Pin(600, 100, 50, 50);

pin7=new Pin(650, 350, 50, 50);
pin8=new Pin(650, 300, 50, 50);
pin9=new Pin(650, 250, 50, 50);
pin10=new Pin(650, 200, 50, 50);
pin11=new Pin(650, 150, 50, 50);
pin12=new Pin(650, 100, 50, 50);



	Engine.run(engine);
  
}


function draw() {
  background(0);
  textSize(20);
  fill("white");
  text("press space when ball stops moving to put ball on slingshot again and If you hit the blocks hard enough they will disapear",70, 450);
  text("OBJECTIVE:to hit the gift hard enough", 750, 70);
  
  textSize(30);
  text("ball speed:", 1050, 500);
  text(player.body.speed, 1200, 500);
//display bodies here
gift1.display();
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
pin11.display();
pin12.display();

}

function mouseDragged(){
        Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
   
}

function keyPressed(){
	if(keyCode===32&&player.body.speed<5){
     Matter.Body.setPosition(player.body, {x:200, y:200});
	 rope.attach(player.body);
	 player.trajectory=[];
	}
}
