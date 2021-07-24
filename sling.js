class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.6,
            length: 7
        }

        this.pointB = pointB
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }
        attach(body){
            this.launch.bodyA = body;
        }
    fly(){
        this.launch.bodyA = null;
    }

    display(){
        
        if(this.launch.bodyA){
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;
            push();
            
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            
            pop();
        }
    }
    
}