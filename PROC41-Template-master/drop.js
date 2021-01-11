class Drop{
    constructor(x,y){
        var options={
            friction:0.1
        }

        this.x=x;
        this.y=y
        this.body = Bodies.circle(this.x,this.y,options);
        World.add(world,this.body);
    }
    display(){
        var droppos=this.body.position;		

			push()
			translate(droppos.x, droppos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0);
			pop()
    }
}