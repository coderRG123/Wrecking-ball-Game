class Player {
  constructor(x,y) {
    var options = {
        'restitution':1,
        'density':10,
        isStatic:false
    }
    this.body = Bodies.circle(x, y, 20, options);
    this.color=color(random(0,255), random(0,255), random(0,255));
    World.add(world, this.body);
    

  }
  display(){

    var pos =this.body.position;
    var angle=this.body.angle;
    push();
    
    translate(pos.x, pos.y);
    rotate(angle);
    fill(this.color);
    ellipseMode(RADIANS);
    ellipse(0, 0, 40, 40);
    pop();
   
  }
}
