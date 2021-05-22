class Gift {
    constructor(x,y, width, height) {
      var options = {
    isStatic:false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width=width
      this.height=height
      World.add(world, this.body);
      this.visibilty=255;
    }
    display(){
      var pos =this.body.position;
      textSize(20);
      text("GIFT", this.body.position.x-20,this.body.position.y-20);
      if(this.body.speed<3){
      push();
      stroke(255)
      fill("red");
      rectMode(CENTER);
      this.visibilty=this.visibilty-2
      rect(pos.x, pos.y, this.width, this.height);
      pop();
      }else{
        World.remove(world, this.body);
    Matter.Body.setPosition(ground1.body, {x:700, y:1000});
    Matter.Body.setPosition(ground2.body, {x:1400, y:1000});
    Matter.Body.setPosition(ground3.body, {x:700, y:1200});
    Matter.Body.setPosition(ground4.body, {x:0, y:1000});
    Matter.Body.setPosition(player.body, {x:700, y:900});

        fill("black");
        rect(0, 0, 1400, 600);
        fill("white");
        textSize(40);
        text("YOU WON! YAY!", 500, 200);
        text("Refresh the tab to play again", 400, 300);
    
      }
    }
  }
