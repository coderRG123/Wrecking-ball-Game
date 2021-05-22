class Pin {
    constructor(x,y, width, height) {
      var options = {
    'restitution':1,
    'density':100,
    'frictionAir':0,
    'friction':2,
    isStatic:false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width=width
      this.height=height
      this.color=color(random(0,255), random(0,255), random(0,255));
      World.add(world, this.body);
      this.visibilty=255;
    }
    display(){
      var pos =this.body.position;
      if(this.body.speed<3){
      push();
      stroke(255)
      fill(this.color);
      rectMode(CENTER);
      this.visibilty=this.visibilty-1
     
      rect(pos.x, pos.y, this.width, this.height);
      pop();
      }else{
        World.remove(world, this.body);
      }
    }
  }
