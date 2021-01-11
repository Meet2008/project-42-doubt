const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var umbrella;
var maxDrops = 100;
var drops;

function preload(){
    
}

function setup(){
    createCanvas(displayWidth,displayHeight);

    engine = Engine.create();
    world = engine.world;
    
    umbrella = new Umbrella(width/2-20,height/2-20);

    
}

function draw(){
    background(0);

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0.400),random(0,400)));
    }

    umbrella.display();
    
}   

function thunder(){
    if(frameCount % 12 === 0){
        var thunder=createSprite(300,400);

        var rand = Math.round(random(1,4));
        switch(rand){
            case 1:thunder.addImage("images/thunderbolt/1.png");
                  break;
            case 2:thunder.addImage("images/thunderbolt/2.png");
                  break;
            case 3:thunder.addImage("images/thunderbolt/3.png");
                  break;
            case 4:thunder.addImage("images/thunderbolt/4.png");
                  default: break;
        }
    }
}