class Box{
  constructor(x, y) {
    var options = {
        
        'restitution':0.4,
        'friction':0.0,
    
    }
    this.body = Bodies.rectangle(x, y, 30, 40, options);
    this.width = 30;
    this.height = 40;
    this.visibility = 255;
    World.add(world, this.body);
  }

  display(){
    var angle = this.body.angle;
    console.log(this.body.speed);
    if (this.body.speed < 3){
      push();
      translate(this.body.position.x, this.body.position.y);
      rect(0, 0, this.width, this.height);
      rotate(angle);
      pop();
    } else {
      World.remove(world, this.body);
    }
  }
  
  };
  