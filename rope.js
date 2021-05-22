class Rope {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.5,
        length: 100,
      };
  
      this.pointB = pointB;
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }
    attach(body) {
      this.rope.bodyA = body;
     
    }
  
    fly() {
      this.rope.bodyA = null;
    }
  
    display() {
      if (this.rope.bodyA) {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
  
    
        if(pointA.x < 400) {
                  strokeWeight(7);
                  stroke("white");
                  line(pointA.x, pointA.y, pointB.x, pointB.y);
                  line(pointA.x, pointA.y, pointB.x, pointB.y+200);
                
              }
              else{
                  strokeWeight(7);
                  stroke("white");
                  line(pointA.x, pointA.y, pointB.x , pointB.y);
                  line(pointA.x, pointA.y, pointB.x, pointB.y+400);
              }
  
       
  
        pop();
      }
    }
  }