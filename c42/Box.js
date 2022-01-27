class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.3,
        'friction':0.1,
        'density':50,
    }
    this.body = Bodies.circle(x,y,5,options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("blue");
    rect(0, 0, this.width, this.height);
    pop();
  }
}