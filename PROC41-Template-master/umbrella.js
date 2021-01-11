class Umbrella{
    constructor(x,y){

        this.x=x;
        this.y=y;
        this.body = Bodies.circle(this.x,this.y);
        this.image = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");
    }
    display(){
        var umbrellapos=this.body.position;		

			push()
			translate(umbrellapos.x, umbrellapos.y);
			imageMode(CENTER)
			strokeWeight(3);
			ellipse(this.image,0,0);
            pop()
            
            if(this.body.position.y > height){
                Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
            }
    }
}