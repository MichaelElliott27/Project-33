class Ball{
    constructor(x, y, width, height) {
        var options = {
            'friction':0.1,
            'density':3,
            'isStatic': false
        }
        this.body = Bodies.rectangle(x, y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        ellipse(0, 0, this.width, this.height);
        pop();
      }
}