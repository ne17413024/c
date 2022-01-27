class Drop {
    constructor(x,y){
        var options = {
            isStatic: false,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.drops = Bodies.circle(x,y,5,options);
        this.radius = 50;
        World.add(world, this.drop)
        
        
    }

    display(){
        
        
    }
}
