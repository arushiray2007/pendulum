class Chain{

    constructor(body1,body2,offsetX,offsetY){

        this.offsetX=offsetX
        this.offsetY=offsetY

        var options={

            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }

        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){

        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        var anchorX=pointB.x+this.offsetX;
        var anchorY=pointB.y+this.offsetY;
        strokeWeight(3);
        line(pointA.x,pointA.y,anchorX,anchorY);
           //line(pointA.x,pointA.y,pointB.x,pointB.y);

    }
}







