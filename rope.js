class Rope{
    constructor(body1,body2){
        var op={
            bodyA: body1, 
            bodyB:body2,
             length:100,
              stiffness:0.54
        }

        this.body=Matter.Constraint.create(op)
        World.add(world,this.body)
    }
}