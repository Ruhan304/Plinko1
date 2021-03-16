class Plinko{
    constructor(x, y) {
        var options = {
            isStatic: true,
        }
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(255, 10, 255);
        stroke(18, 6, 77);
        ellipse(pos.x, pos.y, this.radius, this.radius);
      }
}