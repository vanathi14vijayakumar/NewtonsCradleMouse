class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.08,
            length: 250
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    display(){
    var pointA = this.body.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    
    line(pointA.x, pointA.y, pointB.x, pointB.y);
}
}
