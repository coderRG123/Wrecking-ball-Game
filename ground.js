class Ground {
    constructor(x,y, width, height) {
      var options = {
          'density':20,
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
     this.width=width;
     this.height=height;
      this.color=color(random(0,255), random(0,255), random(0,255));
      World.add(world, this.body);

      
  
    }
    display(){
  
      var pos =this.body.position;
      push();
      fill(this.color);
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
     
    }
  }
  