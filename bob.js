class Bob{

    constructor(x,y,radius){

        var options={

            
            isStatic:true,
            friction:0.5,
            density:1.2
        }

        this.body=Bodies.circle(x,y,radius,options);
        this.r=radius;
        World.add(world,this.body);
        
    }

    display(){

        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("lightgreen");
        ellipseMode(RADIUS);
        
        
        ellipse(0,0,this.r,this.r);
        pop();
    }
    


}